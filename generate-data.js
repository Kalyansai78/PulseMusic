const fs = require('fs');
const path = require('path');
const songMetadata = require('./metadata');

/* Folders */

const musicFolder = path.join(
    __dirname,
    'musics'
);

const imageFolder = path.join(
    __dirname,
    'images'
);

const outputFile = path.join(
    __dirname,
    'data.js'
);

/* Supported Audio Files*/

const audioExtensions = [
    '.mp3',
    '.wav',
    '.ogg',
    '.m4a'
];

/* Language Folders */

const languages = [
    'telugu',
    'tamil',
    'hindi',
    'international'
];

/* Clean Title */

const cleanTitle = (filename) => {

    let title = path.basename(
        filename,
        path.extname(filename)
    );

    title = title
        .replace(
            /\s*\(\s*mp3\.pm\s*\)/gi,
            ''
        )
        .replace(
            /\s*\(\s*KoshalWorld\.Com\s*\)/gi,
            ''
        )
        .replace(
            /\s*-\s*Naa Songs\s*$/i,
            ''
        )
        .replace(
            /[_-]+/g,
            ' '
        )
        .replace(
            /\s+/g,
            ' '
        )
        .trim();

    return title;
};

/* Find Songs */

const songs = [];

let songId = 1;

/* Language Counts */

const languageCounts = {};

languages.forEach((language) => {

    languageCounts[language] = {
        total: 0,
        included: 0
    };

});

/* MetaData Counts */

let metadataFound = 0;
let metadataMissing = 0;

/* Scan Language Folders */

languages.forEach(
    (language) => {

        const languageMusicFolder =
            path.join(
                musicFolder,
                language
            );

        const languageImageFolder =
            path.join(
                imageFolder,
                language
            );

        /* Check Music Folder */

        if (
            !fs.existsSync(
                languageMusicFolder
            )
        ) {

            console.warn(
                `Music folder missing: ${language}`
            );

            return;
        }

        /* Check Image Folder */

        if (
            !fs.existsSync(
                languageImageFolder
            )
        ) {

            console.warn(
                `Image folder missing: ${language}`
            );

            return;
        }

        /* Find Audio Files */

        const files =
            fs
                .readdirSync(
                    languageMusicFolder
                )
                .filter(
                    (file) =>
                        audioExtensions.includes(
                            path.extname(
                                file
                            ).toLowerCase()
                        )
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(
                            b,
                            undefined,
                            {
                                numeric: true,
                                sensitivity: 'base'
                            }
                        )
                );

        languageCounts[language].total =
            files.length;

        /* Process Each Song */

        files.forEach(
            (file) => {

                const baseName =
                    path.basename(
                        file,
                        path.extname(file)
                    );

                /* Find Cover Image */

                const imageExtensions = [
                    '.png',
                    '.jpg',
                    '.jpeg',
                    '.webp'
                ];

                let imageFile = null;

                for (
                    const extension
                    of imageExtensions
                ) {

                    const possibleImage =
                        `${baseName}${extension}`;

                    if (
                        fs.existsSync(
                            path.join(
                                languageImageFolder,
                                possibleImage
                            )
                        )
                    ) {

                        imageFile =
                            possibleImage;

                        break;
                    }

                }

                /* Cover Not Found */

                if (!imageFile) {

                    console.warn(
                        `No cover image found for: ${file}`
                    );

                    return;
                }

                /* Clean Song Title */

                const title =
                    cleanTitle(file);

                /* Get MetaData */

                const metadata =
                    songMetadata[title] || {};

                if (
                    songMetadata[title]
                ) {

                    metadataFound++;

                } else {

                    metadataMissing++;

                    console.warn(
                        `Metadata not found for: ${title}`
                    );

                }

                /* Add Song To Catalog */

                songs.push({

                    id: songId++,

                    title: title,

                    artists:
                        metadata.artists || [],

                    movie:
                        metadata.movie || null,

                    language:
                        language,

                    genre:
                        metadata.genre || null,

                    year:
                        metadata.year || null,

                    cover:
                        `images/${language}/${imageFile}`,

                    audio:
                        `musics/${language}/${file}`

                });

                /* Increment Language Out */

                languageCounts[language].included++;

            }
        );

    }
);

/* Generate Data.js */

const output =
`const songs = ${JSON.stringify(
    songs,
    null,
    4
)};`;

fs.writeFileSync(
    outputFile,
    output,
    'utf8'
);

/* Result */

console.log('');

console.log(
    '========================================'
);

console.log(
    '        PULSEMUSIC CATALOG SUMMARY'
);

console.log(
    '========================================'
);

console.log('');

languages.forEach(
    (language) => {

        const total =
            languageCounts[language].total;

        const included =
            languageCounts[language].included;

        const label =
            language.charAt(0).toUpperCase() +
            language.slice(1);

        console.log(
            `${label.padEnd(15)}: ${included} / ${total}`
        );

    }
);

console.log(
    '----------------------------------------'
);

const totalFiles =
    languages.reduce(
        (sum, language) =>
            sum +
            languageCounts[language].total,
        0
    );

console.log(
    `Total Songs    : ${songs.length} / ${totalFiles}`
);

console.log(
    `Catalog Songs  : ${songs.length}`
);

console.log(
    '----------------------------------------'
);

console.log(
    `Metadata Found : ${metadataFound}`
);

console.log(
    `Metadata Missing: ${metadataMissing}`
);

console.log(
    '========================================'
);

console.log('');