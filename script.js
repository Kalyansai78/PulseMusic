/* Audio Player */

const audio = 
    document.querySelector('#audio-player');

/* Player Controls */

const seekBar = 
    document.querySelector('.seek-bar');

const songName = 
    document.querySelector('.music-name');

const artistName =
    document.querySelector('.artist-name');

const movieName =
    document.querySelector('.movie-name');

const disk =
    document.querySelector('.disk');

const currentTime =
    document.querySelector('.current-time');

const musicDuration =
    document.querySelector('.song-duration');

const playBtn =
    document.querySelector('.play-btn');

const forwardBtn =
    document.querySelector('.forward-btn');

const backwardBtn =
    document.querySelector('.backward-btn');

const trackFavoriteBtn =
    document.querySelector('.track-favorite-btn');

/* Search & Discovery */

const searchInput =
    document.querySelector('#search-input');

const searchBtn =
    document.querySelector('#search-btn');

const sortSelect = 
    document.querySelector('#sort-select');

const clearSearchBtn =
    document.querySelector('#clear-search-btn');

const searchResults =
    document.querySelector('#search-results');

const sectionTitle =
    document.querySelector('#section-title');

const songCount =
    document.querySelector('#song-count');

const recentlyPlayedSection =
    document.querySelector('#recently-played-section');

const recentlyPlayedResults =
    document.querySelector('#recently-played-results');

const recentlyPlayedCount =
    document.querySelector('#recently-played-count');

const myPlaylistsSection =
    document.querySelector('#my-playlists-section');

const myPlaylistsGrid =
    document.querySelector('#my-playlists-grid');

const myPlaylistsCount =
    document.querySelector('#my-playlists-count');

const playlistView =
    document.querySelector('#playlist-view');

const playlistViewTitle =
    document.querySelector('#playlist-view-title');

const playlistViewCount =
    document.querySelector('#playlist-view-count');

const playlistViewCover =
    document.querySelector('#playlist-view-cover');

const playlistBackBtn =
    document.querySelector('#playlist-back-btn');

const playlistViewContent =
    document.querySelector('#playlist-view-content');

const playlistPlayAllBtn =
    document.querySelector('#playlist-play-all-btn');

const clearRecentBtn =
    document.querySelector('#clear-recent-btn');

const playRecentBtn =
    document.querySelector('#play-recent-btn');

const addSongsModal = document.querySelector('#add-songs-modal');
const addSongsModalClose = document.querySelector('#add-songs-modal-close');
const addSongsSearchInput = document.querySelector('#add-songs-search-input');
const addSongsList = document.querySelector('#add-songs-list');
const selectedSongsCount = document.querySelector('#selected-songs-count');
const addSongsCancelBtn = document.querySelector('#add-songs-cancel-btn');
const addSongsConfirmBtn = document.querySelector('#add-songs-confirm-btn');

const playlistAddSongsBtn =
    document.querySelector('#playlist-add-songs-btn');

const languageFilter =
    document.querySelector('#language-filter');

const queueList =
    document.querySelector('#queue-list');

const queueCount =
    document.querySelector('#queue-count');

const shuffleBtn =
    document.querySelector('#shuffle-btn');

const repeatBtn =
    document.querySelector('#repeat-btn');

const createPlaylistHeaderBtn =
    document.querySelector('#create-playlist-header-btn');

const addToPlaylistModal =
    document.querySelector('#add-to-playlist-modal');

const addToPlaylistModalClose =
    document.querySelector('#add-to-playlist-modal-close');

const addToPlaylistSongName =
    document.querySelector('#add-to-playlist-song-name');

const addToPlaylistList =
    document.querySelector('#add-to-playlist-list');

const playlistModal =
    document.querySelector('#playlist-modal');

const playlistModalClose =
    document.querySelector('#playlist-modal-close');

const playlistNameInput =
    document.querySelector('#playlist-name');

const playlistError =
    document.querySelector('#playlist-error');

const playlistCreateBtn =
    document.querySelector('#playlist-create-btn');

const renamePlaylistModal =
    document.querySelector('#rename-playlist-modal');

const renamePlaylistInput =
    document.querySelector('#rename-playlist-input');

const renamePlaylistClose =
    document.querySelector('#rename-playlist-close');

const cancelRenamePlaylist =
    document.querySelector('#cancel-rename-playlist');

const saveRenamePlaylist =
    document.querySelector('#save-rename-playlist');

const pageInfo =
    document.querySelector('#page-info');

const favoritesHeaderBtn =
    document.querySelector('#favorites-header-btn');

const loginHeaderBtn =
    document.querySelector('#login-header-btn');

const authModal =
    document.querySelector('#auth-modal');

const authModalClose =
    document.querySelector('#auth-modal-close');

const authModalTitle =
    document.querySelector('#auth-modal-title');

const showSignupBtn =
    document.querySelector('#show-signup-btn');

const showLoginBtn =
    document.querySelector('#show-login-btn');

const loginForm =
    document.querySelector('#login-form');

const signupForm =
    document.querySelector('#signup-form');

const loginEmail =
    document.querySelector('#login-email');

const loginPassword =
    document.querySelector('#login-password');

const forgotPasswordBtn =
    document.querySelector('#forgot-password-btn');

const resetPasswordForm =
    document.querySelector('#reset-password-form');

const resetPassword =
    document.querySelector('#reset-password');

const resetPasswordConfirm =
    document.querySelector('#reset-password-confirm');

const resetPasswordError =
    document.querySelector('#reset-password-error');

const loginError =
    document.querySelector('#login-error');

const signupName =
    document.querySelector('#signup-name');

const signupEmail =
    document.querySelector('#signup-email');

const signupPassword =
    document.querySelector('#signup-password');

const signupError =
    document.querySelector('#signup-error');

const signupSuccess =
    document.querySelector('#signup-success');

const signupSuccessEmail =
    document.querySelector('#signup-success-email');

const signupSuccessLoginBtn =
    document.querySelector('#signup-success-login-btn');

const profileHeaderBtn =
    document.querySelector('#profile-header-btn');

const profileHeaderName =
    document.querySelector('#profile-header-name');

const accountDropdown =
    document.querySelector('#account-dropdown');

const accountDropdownName =
    document.querySelector('#account-dropdown-name');

const accountDropdownEmail =
    document.querySelector('#account-dropdown-email');

const accountLogoutBtn =
    document.querySelector('#account-logout-btn');

const deletePlaylistModal =
    document.querySelector('#delete-playlist-modal');

const deletePlaylistMessage =
    document.querySelector('#delete-playlist-message');

const cancelDeletePlaylist =
    document.querySelector('#cancel-delete-playlist');

const confirmDeletePlaylist =
    document.querySelector('#confirm-delete-playlist');

const closeDeletePlaylist =
    document.querySelector('#close-delete-playlist');

const volumeBtn =
    document.querySelector('#volume-btn');

const volumeMaxBtn =
    document.querySelector('#volume-max-btn');

const volumeSlider =
    document.querySelector('#volume-slider');

/* Player State */

let currentSongIndex = 0;

let currentSongs = [...songs];

let isPlaying = false;

let isSeeking = false;

let animationFrameId = null;

let lastDisplayedSecond = -1;

let queue = [];

let queueIndex = 0;

let isShuffleOn = false;

let repeatMode = 'off';

let selectedLanguage = 'all';

let searchQuery = '';

let favoriteSongs = new Set();

let playlistToDelete = null;

let showFavoritesOnly = false;

let recentlyPlayed = [];

let playlists = [];

let activePlaylistId = null;

let selectedPlaylistSongs = new Set();

let songToAddToPlaylist = null;

let selectedSort = 'default';

let playlistToRename = null;

let currentPage = 1;

let lastVolume = 1;

const songsPerPage = 20;

createQueue(
    currentSongs,
    0
);

/* Toast Notifications */

const showToast = (
    message,
    type = 'success',
    duration = 3000
) => {

    let toastContainer =
        document.querySelector('#toast-container');

    if (!toastContainer) {

        toastContainer =
            document.createElement('div');

        toastContainer.id =
            'toast-container';

        document.body.appendChild(
            toastContainer
        );
    }

    const toast =
        document.createElement('div');

    toast.className =
        `toast toast-${type}`;

    const icon =
        type === 'success'
            ? '✓'
            : type === 'error'
                ? '✕'
                : 'ℹ';

    toast.innerHTML = `
        <span class="toast-icon">
            ${icon}
        </span>

        <span class="toast-message">
            ${message}
        </span>
    `;

    toastContainer.appendChild(
        toast
    );

    requestAnimationFrame(() => {

        toast.classList.add(
            'show'
        );

    });

    setTimeout(() => {

        toast.classList.remove(
            'show'
        );

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, duration);
};

/* Password Visibility Toggle */

document.querySelectorAll('.password-toggle').forEach(
    (toggleBtn) => {

        toggleBtn.addEventListener(
            'click',
            () => {

                const targetId =
                    toggleBtn.dataset.target;

                const passwordInput =
                    document.getElementById(targetId);

                if (!passwordInput) {
                    return;
                }

                const isHidden =
                    passwordInput.type === 'password';

                passwordInput.type =
                    isHidden ? 'text' : 'password';

                toggleBtn.setAttribute(
                    'aria-label',
                    isHidden
                        ? 'Hide password'
                        : 'Show password'
                );

                toggleBtn.setAttribute(
                    'title',
                    isHidden
                        ? 'Hide password'
                        : 'Show password'
                );

                const eyeIcon =
                    toggleBtn.querySelector('.eye-icon');

                if (eyeIcon) {

                    eyeIcon.innerHTML = isHidden
                        ? `
                            <path
                                d="M2.5 12C4.5 7.5 8.2 5 12 5C15.8 5 19.5 7.5 21.5 12C19.5 16.5 15.8 19 12 19C8.2 19 4.5 16.5 2.5 12Z"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="currentColor"
                                stroke-width="1.8"
                            />
                        `
                        : `
                            <path
                                d="M2.5 12C4.5 7.5 8.2 5 12 5C15.8 5 19.5 7.5 21.5 12C19.5 16.5 15.8 19 12 19C8.2 19 4.5 16.5 2.5 12Z"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="currentColor"
                                stroke-width="1.8"
                            />

                            <path
                                d="M4 4L20 20"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                            />
                        `;
                }
            }
        );

    }
);

/* Favorites - Supabase */

const syncFavoriteWithSupabase = async (
    songId,
    isFavorite
) => {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        return;
    }

    if (isFavorite) {

        const { error } =
            await supabaseClient
                .from('favorites')
                .upsert({
                    user_id: session.user.id,
                    song_id: songId
                });

        if (error) {
            console.error(
                'Failed to add favorite:',
                error
            );
        }

    } else {

        const { error } =
            await supabaseClient
                .from('favorites')
                .delete()
                .eq(
                    'user_id',
                    session.user.id
                )
                .eq(
                    'song_id',
                    songId
                );

                if (error) {
            console.error(
                'Failed to remove favorite:',
                error
            );
        }
    }
};

    const loadFavoritesFromSupabase = async () => {

        const {
            data: {
                session
            }
        } = await supabaseClient.auth.getSession();

        if (!session) {
            return;
        }

        const {
            data,
            error
        } = await supabaseClient
            .from('favorites')
            .select('song_id')
            .eq(
                'user_id',
                session.user.id
            );

        if (error) {
            console.error(
                'Failed to load favorites:',
                error
            );

            return;
        }

        favoriteSongs = new Set(
            data.map(
                favorite => Number(favorite.song_id)
            )
        );

        applyFilters();
    };

/* Update Volume Icon */

const updateVolumeIcon = () => {

    if (audio.volume > 0) {

        volumeBtn.innerHTML = `
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M11 5L6 9H3v6h3l5 4V5z"
                    fill="currentColor"
                />
            </svg>
        `;

        volumeBtn.setAttribute(
            'aria-label',
            'Mute'
        );

        volumeBtn.setAttribute(
            'title',
            'Mute'
        );

    } else {

        volumeBtn.innerHTML = `
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M11 5L6 9H3v6h3l5 4V5z"
                    fill="currentColor"
                />

                <path
                    d="M16 9L21 15"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />

                <path
                    d="M21 9L16 15"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        `;

        volumeBtn.setAttribute(
            'aria-label',
            'Unmute'
        );

        volumeBtn.setAttribute(
            'title',
            'Unmute'
        );
    }
};

/* Initial Volume */

audio.volume = 1;

volumeSlider.value = 1;

volumeSlider.style.setProperty(
    '--volume',
    '100%'
);

updateVolumeIcon();

/* Volume Slider */

volumeSlider.addEventListener(
    'input',
    () => {

        const volume =
            Number(volumeSlider.value);

        audio.volume = volume;

        volumeSlider.style.setProperty(
            '--volume',
            `${volume * 100}%`
        );

        if (volume > 0) {
            lastVolume = volume;
        }

        updateVolumeIcon();
    }
);

/* Mute / Unmute */

volumeBtn.addEventListener(
    'click',
    () => {

        if (audio.volume > 0) {

            lastVolume =
                audio.volume;

            audio.volume = 0;

            volumeSlider.value = 0;

            volumeSlider.style.setProperty(
                '--volume',
                '0%'
            );

        } else {

            const restoredVolume =
                lastVolume > 0
                    ? lastVolume
                    : 1;

            audio.volume =
                restoredVolume;

            volumeSlider.value =
                restoredVolume;

            volumeSlider.style.setProperty(
                '--volume',
                `${restoredVolume * 100}%`
            );
        }

        updateVolumeIcon();
    }
);

volumeMaxBtn.addEventListener(
    'click',
    () => {

        const currentVolume =
            Number(volumeSlider.value);

        const increasedVolume =
            Math.min(
                currentVolume + 0.1,
                1
            );

        volumeSlider.value =
            increasedVolume;

        volumeSlider.dispatchEvent(
            new Event('input')
        );
    }
);

/* Format Time */

const formatTime =
    (time) => {

        if (!Number.isFinite(time) || time < 0) {
            return '00:00';
        }

        const minutes =
            Math.floor(time / 60);

        const seconds =
            Math.floor(time % 60);

        return (
            `${String(minutes).padStart(2, '0')}:` +
            `${String(seconds).padStart(2, '0')}`
        );
    };

/* Update Play Button */

const updatePlayButton =
    (playing) => {

        isPlaying = playing;

        if (playing) {

            playBtn.classList.add('pause');

            playBtn.setAttribute(
                'aria-label',
                'Pause'
            );

            disk.classList.add('play');

        } else {

            playBtn.classList.remove('pause');

            playBtn.setAttribute(
                'aria-label',
                'Play'
            );

            disk.classList.remove('play');

        }

    };

trackFavoriteBtn.addEventListener(
    'click',
    async(event) => {

        event.stopPropagation();

        const song =
            currentSongs[currentSongIndex];

        if (!song) {
            return;
        }

        if (favoriteSongs.has(song.id)) {

            favoriteSongs.delete(song.id);

            trackFavoriteBtn.textContent = '♡';

            trackFavoriteBtn.setAttribute(
                'aria-label',
                'Add to favorites'
            );

            trackFavoriteBtn.setAttribute(
                'title',
                'Add to favorites'
            );

            showToast(
                'Removed from favorites.'
            );

        } else {

            favoriteSongs.add(song.id);

            trackFavoriteBtn.textContent = '♥';

            trackFavoriteBtn.setAttribute(
                'aria-label',
                'Remove from favorites'
            );

            trackFavoriteBtn.setAttribute(
                'title',
                'Remove from favorites'
            );

            showToast(
                'Added to favorites.'
            );
        }

        trackFavoriteBtn.classList.toggle(
            'active',
            favoriteSongs.has(song.id)
        );

        await syncFavoriteWithSupabase(
            song.id,
            favoriteSongs.has(song.id)
        );

    }
);

function resetDiskRotation(shouldRotate = false) {
    disk.classList.remove('play');

    disk.style.animation = 'none';
    disk.style.transform = 'rotate(0deg)';

    void disk.offsetWidth;

    disk.style.animation = '';

    if (shouldRotate) {
        disk.classList.add('play');
    }
}

/* Playlist Modal */

const openPlaylistModal = () => {
    playlistModal.classList.add('active');
    playlistModal.setAttribute('aria-hidden', 'false');

    playlistNameInput.value = '';
    playlistError.textContent = '';

    playlistNameInput.focus();
};

const closePlaylistModal = () => {
    playlistModal.classList.remove('active');
    playlistModal.setAttribute('aria-hidden', 'true');

    playlistNameInput.value = '';
    playlistError.textContent = '';
};

createPlaylistHeaderBtn.addEventListener(
    'click',
    openPlaylistModal
);

playlistModalClose.addEventListener(
    'click',
    closePlaylistModal
);

playlistModal.addEventListener(
    'click',
    (event) => {

        if (event.target === playlistModal) {
            closePlaylistModal();
        }

    }
);

document.addEventListener(
    'keydown',
    (event) => {

        if (
            event.key === 'Escape' &&
            playlistModal.classList.contains('active')
        ) {
            closePlaylistModal();
        }

    }
);

loginHeaderBtn.addEventListener(
    'click',
    () => {
        authModal.classList.add('active');
    }
);

/* Authentication */

let isPasswordRecovery = false;

supabaseClient.auth.onAuthStateChange(
    (event) => {
        if (event === 'PASSWORD_RECOVERY') {
            isPasswordRecovery = true;

            console.log(
                'Password recovery session detected.'
            );

            loginHeaderBtn.style.display = 'flex';
            profileHeaderBtn.style.display = 'none';

            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            signupSuccess.style.display = 'none';

            resetPasswordForm.style.display = 'flex';

            authModalTitle.textContent =
                'Reset Password';

            resetPasswordError.textContent = '';

            authModal.classList.add('active');
        }
    }
);

supabaseClient.auth.getSession().then(
    async({ data }) => {

        const pendingVerification =
            localStorage.getItem(
                'pulseMusicPendingVerification'
            );

        if (
            data.session &&
            pendingVerification
        ) {

            await supabaseClient.auth.signOut();

            localStorage.removeItem(
                'pulseMusicPendingVerification'
            );

            loginHeaderBtn.style.display = 'flex';
            profileHeaderBtn.style.display = 'none';

            profileHeaderName.textContent =
                'Profile';

            accountDropdownName.textContent =
                'User';

            accountDropdownEmail.textContent =
                'email@example.com';

            loginEmail.value =
                localStorage.getItem(
                    'pulseMusicVerificationEmail'
                ) || '';

            loginPassword.value = '';

            loginError.textContent = '';

            authModalTitle.textContent =
                'Login';

            signupSuccess.style.display =
                'none';

            signupForm.style.display =
                'none';

            loginForm.style.display =
                'flex';

            authModal.classList.add(
                'active'
            );

            localStorage.removeItem(
                'pulseMusicVerificationEmail'
            );

            return;
        }

        if (data.session && isPasswordRecovery) {

            loginHeaderBtn.style.display = 'flex';
            profileHeaderBtn.style.display = 'none';

            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            signupSuccess.style.display = 'none';

            resetPasswordForm.style.display = 'flex';

            authModalTitle.textContent = 'Reset Password';

            resetPasswordError.textContent = '';

            authModal.classList.add('active');

            return;
        }

        if (data.session) {

            loginHeaderBtn.style.display = 'none';
            profileHeaderBtn.style.display = 'flex';

            const user = data.session.user;

            const fullName =
                user.user_metadata?.full_name;

            profileHeaderName.textContent =
                fullName || 'Profile';

            accountDropdownName.textContent =
                fullName || 'User';

            accountDropdownEmail.textContent =
                user.email || 'email@example.com';

            await loadFavoritesFromSupabase();
            await loadRecentlyPlayedFromSupabase();
            await loadPlaylistsFromSupabase();

        } else {

            loginHeaderBtn.style.display = 'flex';
            profileHeaderBtn.style.display = 'none';

            profileHeaderName.textContent =
                'Profile';

            accountDropdownName.textContent =
                'User';

            accountDropdownEmail.textContent =
                'email@example.com';
        }

    }
);

authModalClose.addEventListener(
    'click',
    () => {
        authModal.classList.remove('active');
    }
);

showSignupBtn.addEventListener(
    'click',
    () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';

        authModalTitle.textContent = 'Sign Up';
    }
);

showLoginBtn.addEventListener(
    'click',
    () => {
        signupForm.style.display = 'none';
        loginForm.style.display = 'flex';

        authModalTitle.textContent = 'Login';
    }
);

signupSuccessLoginBtn.addEventListener(
    'click',
    () => {
        signupSuccess.style.display = 'none';

        loginForm.style.display = 'flex';

        authModalTitle.textContent = 'Login';

        loginEmail.value = '';
        loginPassword.value = '';
        loginError.textContent = '';
    }
);

forgotPasswordBtn.addEventListener(
    'click',
    async () => {
        loginError.textContent = '';

        const email = loginEmail.value.trim();

        if (!email) {
            loginError.textContent =
                'Please enter your email address first.';
            return;
        }

        const { error } =
            await supabaseClient.auth.resetPasswordForEmail(
                email
            );

        if (error) {
            loginError.textContent = error.message;
            return;
        }

        loginError.textContent =
            'Password reset link has been sent to your email.';
    }
);

resetPasswordForm.addEventListener(
    'submit',
    async (event) => {
        event.preventDefault();

        resetPasswordError.textContent = '';

        const newPassword =
            resetPassword.value;

        const confirmPassword =
            resetPasswordConfirm.value;

        if (newPassword !== confirmPassword) {
            resetPasswordError.textContent =
                'Passwords do not match.';
            return;
        }

        const { error } =
            await supabaseClient.auth.updateUser({
                password: newPassword
            });

        if (error) {
            resetPasswordError.textContent =
                error.message;
            return;
        }

        resetPasswordForm.reset();

        resetPasswordForm.style.display =
            'none';

        loginForm.style.display =
            'flex';

        authModalTitle.textContent =
            'Login';

        showToast(
            'Password updated successfully. Please login again.'
        );
    }
);

loginForm.addEventListener(
    'submit',
    async (event) => {
        event.preventDefault();

        loginError.textContent = '';

        const email = loginEmail.value.trim();
        const password = loginPassword.value;
        
        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

        if (error) {
            loginError.textContent = error.message;
            return;
        }

        const user = data.user;

        const fullName =
            user.user_metadata?.full_name;

        loginHeaderBtn.style.display = 'none';
        profileHeaderBtn.style.display = 'flex';

        profileHeaderName.textContent =
            fullName || 'Profile';

        accountDropdownName.textContent =
            fullName || 'User';

        accountDropdownEmail.textContent =
            user.email || 'email@example.com';

        await loadFavoritesFromSupabase();
        await loadRecentlyPlayedFromSupabase();
        await loadPlaylistsFromSupabase();

        authModal.classList.remove('active');

        showToast(
            'Login successful.'
        );
    }
);

signupForm.addEventListener(
    'submit',
    async (event) => {
        event.preventDefault();

        signupError.textContent = '';

        const fullName =
            signupName.value.trim();

        const email =
            signupEmail.value.trim();

        const password =
            signupPassword.value;

        const { data, error } =
            await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });

        if (error) {
            signupError.textContent =
                error.message;

            showToast(
                'Signup failed.',
                'error'
            );

            return;
        }

        signupForm.reset();

        signupForm.style.display = 'none';

        localStorage.setItem(
            'pulseMusicPendingVerification',
            'true'
        );

        localStorage.setItem(
            'pulseMusicVerificationEmail',
            email
        );

        signupSuccessEmail.textContent =
            email;

        signupSuccess.style.display =
            'flex';
    }
);

profileHeaderBtn.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

        accountDropdown.classList.toggle('active');
    }
);

accountLogoutBtn.addEventListener(
    'click',
    async () => {

        const {
            error
        } = await supabaseClient.auth.signOut();

        if (error) {
            console.error(
                'Logout failed:',
                error
            );
            return;
        }

        accountDropdown.classList.remove('active');

        profileHeaderBtn.style.display = 'none';
        loginHeaderBtn.style.display = 'flex';

        profileHeaderName.textContent = 'Profile';

        accountDropdownName.textContent = 'User';
        accountDropdownEmail.textContent = 'email@example.com';

        showToast(
            'Logged out successfully.'
        );

        favoriteSongs.clear();
        recentlyPlayed = [];
        playlists = [];
        activePlaylistId = null;
        showFavoritesOnly = false;

        playlistView.classList.remove('active');

        favoritesHeaderBtn.classList.remove('active');

        myPlaylistsGrid.innerHTML = '';

        myPlaylistsCount.textContent = '0 playlists';

        myPlaylistsSection.style.display = 'none';

        playlistViewContent.innerHTML = '';

        displayPlaylists();

        applyFilters();
    }
);

const accountPlaylistsBtn =
    document.querySelector('#account-playlists-btn');

const accountRecentBtn =
    document.querySelector('#account-recent-btn');

accountPlaylistsBtn.addEventListener(
    'click',
    () => {

        accountDropdown.classList.remove('active');

        closePlaylistView();

        displayPlaylists();

        myPlaylistsSection.style.display = '';

        if (playlists.length === 0) {

            myPlaylistsGrid.innerHTML = `
                <div class="playlist-empty-state">
                    
                    <div class="playlist-empty-icon">
                        ♫
                    </div>

                    <h3>
                        No playlists yet
                    </h3>

                    <p>
                        Create a playlist to organize your favorite songs
                    </p>

                </div>
            `;

        }

        myPlaylistsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }
);

accountRecentBtn.addEventListener(
    'click',
    () => {

        accountDropdown.classList.remove('active');

        closePlaylistView();

        displayRecentlyPlayed();

        recentlyPlayedSection.style.display = '';

        if (recentlyPlayed.length === 0) {

            recentlyPlayedResults.innerHTML = `
                <div class="recent-empty-state">

                    <div class="recent-empty-icon">
                        🕘
                    </div>

                    <h3>
                        No recently played songs
                    </h3>

                    <p>
                        Play a song and it will appear here
                    </p>

                </div>
            `;

        }

        recentlyPlayedSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }
);

document.addEventListener(
    'click',
    () => {
        accountDropdown.classList.remove('active');
    }
);

document.addEventListener(
    'keydown',
    (event) => {

        if (event.key === 'Escape') {
            accountDropdown.classList.remove('active');
        }

    }
);

/* Create Playlist */

const createPlaylist = async () => {

    const name =
        playlistNameInput.value.trim();

    if (!name) {

        playlistError.textContent =
            'Please enter a playlist name.';

        playlistNameInput.focus();

        return;
    }

    const alreadyExists =
        playlists.some(
            playlist =>
                playlist.name.toLowerCase() ===
                name.toLowerCase()
        );

    if (alreadyExists) {
        showToast(
            'A playlist with this name already exists.',
            'error'
        );
        return;
    }

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        showToast(
            'Please login to create a playlist.',
            'error'
        );
        return;
    }

    const {
        data,
        error
    } = await supabaseClient
        .from('playlists')
        .insert({
            user_id: session.user.id,
            name: name
        })
        .select()
        .single();

    if (error) {

        console.error(
            'Failed to create playlist:',
            error
        );

        showToast(
            'Failed to create playlist.',
            'error'
        );

        return;
    }

    const newPlaylist = {
        id: data.id,
        name: data.name,
        songs: []
    };

    playlists.push(newPlaylist);

    displayPlaylists();

    closePlaylistModal();

    showToast(
        'Playlist created successfully.'
    );

};

playlistCreateBtn.addEventListener(
    'click',
    createPlaylist
);

playlistNameInput.addEventListener(
    'keydown',
    (event) => {

        if (event.key === 'Enter') {
            createPlaylist();
        }

    }
);

const getPlaylistCoverSongs = (playlist) => {
    if (!playlist?.songs || playlist.songs.length === 0) {
        return [];
    }

    return playlist.songs
        .map((songId) =>
            songs.find((song) => song.id === songId)
        )
        .filter(Boolean)
        .slice(0, 4);
};

const renderPlaylistViewCover = (playlist) => {

    const coverSongs =
        getPlaylistCoverSongs(playlist);

    if (coverSongs.length === 0) {

        playlistViewCover.innerHTML = `
            <div class="playlist-view-cover-empty">
                ♫
            </div>
        `;

        return;
    }

    playlistViewCover.innerHTML = `
        <div
            class="
                playlist-view-cover-grid
                playlist-view-cover-count-${coverSongs.length}
            "
        >

            ${coverSongs.map((song) => `
                <img
                    src="${song.cover}"
                    alt=""
                    loading="lazy"
                >
            `).join('')}

        </div>
    `;
};

/* Display Playlists */

const displayPlaylists = () => {

    myPlaylistsGrid.innerHTML = '';

    if (playlists.length === 0) {

        myPlaylistsSection.style.display = 'none';

        myPlaylistsCount.textContent =
            '0 playlists';

        return;
    }

    myPlaylistsSection.style.display = '';

    myPlaylistsCount.textContent =
        `${playlists.length} ${
            playlists.length === 1
                ? 'playlist'
                : 'playlists'
        }`;

    playlists.forEach((playlist) => {

        const playlistCard =
            document.createElement('div');

        playlistCard.className =
            'playlist-card';

        const coverSongs = getPlaylistCoverSongs(playlist);

        let playlistCoverHTML = '';

        if (coverSongs.length === 0) {

            playlistCoverHTML = `
                <div class="playlist-card-cover playlist-card-cover-empty">
                    <span>♫</span>
                </div>
            `;

        } else {

            playlistCoverHTML = `
                <div
                    class="playlist-card-cover playlist-card-cover-grid playlist-card-cover-count-${coverSongs.length}"
                >
                    ${coverSongs.map((song) => `
                        <img
                            src="${song.cover}"
                            alt=""
                            loading="lazy"
                        >
                    `).join('')}
                </div>
            `;

        }

        playlistCard.innerHTML = `
            ${playlistCoverHTML}

            <div class="playlist-card-info">

                <h3>
                    ${playlist.name}
                </h3>

                <div class="playlist-card-bottom">

                    <p>
                        ${playlist.songs.length}
                        ${
                            playlist.songs.length === 1
                                ? 'song'
                                : 'songs'
                        }
                    </p>

                    <div class="playlist-card-actions">

                        <button
                            class="playlist-rename-btn"
                            type="button"
                            aria-label="Rename ${playlist.name}"
                            title="Rename playlist"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 20h9"
                                />
                                <path
                                    d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"
                                />
                            </svg>
                        </button>

                        <button
                            class="playlist-delete-btn"
                            type="button"
                            aria-label="Delete ${playlist.name}"
                            title="Delete playlist"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 6h18"
                                />
                                <path
                                    d="M8 6V4h8v2"
                                />
                                <path
                                    d="M19 6l-1 14H6L5 6"
                                />
                                <path
                                    d="M10 11v5"
                                />
                                <path
                                    d="M14 11v5"
                                />
                            </svg>
                        </button>

                    </div>

                </div>

            </div>
        `;

        playlistCard.addEventListener(
            'click',
            (event) => {
                if (
                    event.target.closest(
                        '.playlist-rename-btn'
                    ) ||
                    event.target.closest(
                        '.playlist-delete-btn'
                    )
                ) {
                    return;
                }

                openPlaylist(playlist.id);
            }
        );

        const renameBtn =
            playlistCard.querySelector(
                '.playlist-rename-btn'
            );

        renameBtn.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                playlistToRename = playlist;

                renamePlaylistInput.value =
                    playlist.name;

                renamePlaylistModal.classList.remove(
                    'hidden'
                );

                renamePlaylistInput.focus();
                renamePlaylistInput.select();
            }
        );

        const deleteBtn =
            playlistCard.querySelector(
                '.playlist-delete-btn'
            );

        deleteBtn.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                playlistToDelete = playlist;

                deletePlaylistMessage.textContent =
                    `Are you sure you want to delete "${playlist.name}"?`;

                deletePlaylistModal.classList.remove(
                    'hidden'
                );
            }
        );

        myPlaylistsGrid.appendChild(
            playlistCard
        );

    });
};

saveRenamePlaylist.addEventListener(
    'click',
    async () => {
        if (!playlistToRename) {
            return;
        }

        const newName =
            renamePlaylistInput.value.trim();

        if (!newName) {
            showToast(
                'Playlist name cannot be empty.',
                'error'
            );
            return;
        }

        const duplicatePlaylist =
            playlists.some(
                (playlist) =>
                    playlist.id !==
                        playlistToRename.id &&
                    playlist.name.toLowerCase() ===
                        newName.toLowerCase()
            );

        if (duplicatePlaylist) {
            showToast(
                'A playlist with this name already exists.',
                'error'
            );
            return;
        }

        const { error } =
            await supabaseClient
                .from('playlists')
                .update({
                    name: newName
                })
                .eq('id', playlistToRename.id);

        if (error) {
            console.error(
                'Failed to rename playlist:',
                error
            );

            showToast(
                'Failed to rename playlist.',
                'error'
            );

            return;
        }

        playlistToRename.name = newName;

        displayPlaylists();

        if (
            activePlaylistId ===
            playlistToRename.id
        ) {
            playlistViewTitle.textContent =
                playlistToRename.name;
        }

        renamePlaylistModal.classList.add(
            'hidden'
        );

        showToast(
            'Playlist renamed successfully.'
        );

        playlistToRename = null;
    }
);

function closeRenamePlaylistModal() {
    renamePlaylistModal.classList.add(
        'hidden'
    );

    playlistToRename = null;
}

renamePlaylistClose.addEventListener(
    'click',
    closeRenamePlaylistModal
);

cancelRenamePlaylist.addEventListener(
    'click',
    closeRenamePlaylistModal
);

renamePlaylistModal.addEventListener(
    'click',
    (event) => {

        if (event.target === renamePlaylistModal) {
            closeRenamePlaylistModal();
        }

    }
);

function closeDeletePlaylistModal() {

    deletePlaylistModal.classList.add(
        'hidden'
    );

    playlistToDelete = null;
}

cancelDeletePlaylist.addEventListener(
    'click',
    closeDeletePlaylistModal
);

closeDeletePlaylist.addEventListener(
    'click',
    closeDeletePlaylistModal
);

deletePlaylistModal.addEventListener(
    'click',
    (event) => {

        if (
            event.target ===
            deletePlaylistModal
        ) {
            closeDeletePlaylistModal();
        }

    }
);

confirmDeletePlaylist.addEventListener(
    'click',
    async () => {

        if (!playlistToDelete) {
            return;
        }

        const playlist =
            playlistToDelete;

        const { error } =
            await supabaseClient
                .from('playlists')
                .delete()
                .eq('id', playlist.id);

        if (error) {

            console.error(
                'Failed to delete playlist:',
                error
            );

            closeDeletePlaylistModal();

            showToast(
                'Failed to delete playlist.',
                'error'
            );

            return;
        }

        playlists =
            playlists.filter(
                (item) =>
                    item.id !== playlist.id
            );

        if (
            activePlaylistId ===
            playlist.id
        ) {
            closePlaylistView();
        }

        closeDeletePlaylistModal();

        displayPlaylists();

        showToast(
            'Playlist deleted successfully.'
        );
    }
);

const addSelectedSongsToPlaylist = async () => {

    if (!activePlaylistId) {
        return;
    }

    const playlist = playlists.find(
        (item) => item.id === activePlaylistId
    );

    if (!playlist) {
        return;
    }

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        showToast(
            'Please login to add songs to a playlist.',
            'error'
        );
        return;
    }

    const songsToAdd = [];
    const duplicateSongs = [];

    selectedPlaylistSongs.forEach((songId) => {

        const song = songs.find(
            (item) => item.id === songId
        );

        if (!song) {
            return;
        }

        if (playlist.songs.includes(songId)) {
            duplicateSongs.push(song);
        } else {
            songsToAdd.push(songId);
        }
    });

    if (songsToAdd.length === 0) {

        showToast(
            duplicateSongs.length === 1
                ? 'Song is already in this playlist.'
                : 'Selected songs are already in this playlist.',
            'info'
        );

        selectedPlaylistSongs.clear();

        closeAddSongsModal();

        return;
    }

    const rowsToInsert = songsToAdd.map(
        (songId) => ({
            playlist_id: playlist.id,
            song_id: String(songId)
        })
    );

    const {
        error
    } = await supabaseClient
        .from('playlist_songs')
        .insert(rowsToInsert);

    if (error) {
        console.error(
            'Failed to add songs to playlist:',
            error
        );

        showToast(
            'Failed to add songs to playlist.',
            'error'
        );

        return;
    }

    songsToAdd.forEach((songId) => {
        playlist.songs.push(songId);
    });

    selectedPlaylistSongs.clear();

    addSongsSearchInput.value = '';

    closeAddSongsModal();

    displayPlaylists();

    openPlaylist(activePlaylistId);

    if (duplicateSongs.length > 0) {

        showToast(
            `${songsToAdd.length} ${
                songsToAdd.length === 1
                    ? 'song'
                    : 'songs'
            } added. ${
                duplicateSongs.length
            } ${
                duplicateSongs.length === 1
                    ? 'song was'
                    : 'songs were'
            } already in this playlist.`,
            'info'
        );

    } else {

        showToast(
            `${songsToAdd.length} ${
                songsToAdd.length === 1
                    ? 'song'
                    : 'songs'
            } added to playlist.`
        );

    }
};

const displayPlaylistSongs = (playlist) => {

    playlistViewContent.innerHTML = '';

    if (!playlist.songs || playlist.songs.length === 0) {

        playlistViewContent.innerHTML = `
            <div class="playlist-empty-state">

                <div class="playlist-empty-icon">
                    ♫
                </div>

                <h3>
                    This playlist is empty
                </h3>

                <p>
                    Add songs to get started
                </p>

                <button
                    class="playlist-add-songs-btn"
                    id="playlist-add-songs-btn"
                    type="button"
                >
                    ＋ Add Songs
                </button>

            </div>
        `;

        return;
    }

    const playlistSongs = playlist.songs
        .map(songId =>
            songs.find(song => song.id === songId)
        )
        .filter(Boolean);

    const playlistSongsList =
        document.createElement('div');

    playlistSongsList.className =
        'playlist-songs-list';

    playlistSongs.forEach((song) => {

        const songItem =
            document.createElement('div');

        songItem.className =
            'playlist-song-item';

        songItem.innerHTML = `
            <img
                src="${song.cover}"
                alt="${song.title}"
                loading="lazy"
            >

            <div class="playlist-song-info">

            <h4>${song.title}</h4>

            <p>
                ${song.artists || 'Unknown Artist'}
            </p>

            <span class="song-movie">
                ${song.movie || 'Unknown Movie'}
            </span>

            <span class="song-language">
                ${song.language}
            </span>

            </div>

            <div class="playlist-song-actions">

                <button
                    class="playlist-song-play-btn"
                    type="button"
                    data-song-id="${song.id}"
                    aria-label="Play ${song.title}"
                    title="Play"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                </button>

                <button
                    class="playlist-song-remove-btn"
                    type="button"
                    data-song-id="${song.id}"
                    aria-label="Remove ${song.title} from playlist"
                    title="Remove from playlist"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4h8v2"></path>
                        <path d="M19 6l-1 14H6L5 6"></path>
                        <path d="M10 11v5"></path>
                        <path d="M14 11v5"></path>
                    </svg>
                </button>

            </div>
        `;

        playlistSongsList.appendChild(songItem);
    });

    playlistViewContent.appendChild(
        playlistSongsList
    );
};

/* Open Playlist */

const openPlaylist = (playlistId) => {

    const playlist =
        playlists.find(
            item => item.id === playlistId
        );

    if (!playlist) {
        return;
    }

    activePlaylistId =
        playlist.id;

    playlistViewTitle.textContent =
        playlist.name;

    playlistViewCount.textContent =
        `${playlist.songs.length} ${
            playlist.songs.length === 1
                ? 'song'
                : 'songs'
        }`;

    playlistPlayAllBtn.disabled =
        playlist.songs.length === 0;

    renderPlaylistViewCover(playlist);

    displayPlaylistSongs(playlist);

    playlistView.classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
   });

    document.querySelector(
        '.section-heading'
    ).style.display = 'none';

    document.querySelector(
        '.language-row'
    ).style.display = 'none';

    document.querySelector(
        '.sort-container'
    ).style.display = 'none';

    searchResults.style.display = 'none';

    recentlyPlayedSection.style.display = 'none';

    myPlaylistsSection.style.display = 'none';

    pagination.style.display = 'none';
};

const playEntirePlaylist = () => {

    if (!activePlaylistId) {
        return;
    }

    const playlist =
        playlists.find(
            (item) => item.id === activePlaylistId
        );

    if (!playlist) {
        return;
    }

    const playlistSongs =
        playlist.songs
            .map((songId) =>
                songs.find((song) => song.id === songId)
            )
            .filter(Boolean);

    if (playlistSongs.length === 0) {
        return;
    }

    currentSongs = [...playlistSongs];

    currentSongIndex = 0;

    queue = [...playlistSongs];

    queueIndex = 0;

    loadSong(
        playlistSongs[0],
        true
    );

    renderQueue();
};

playlistPlayAllBtn.addEventListener(
    'click',
    playEntirePlaylist
);

/* Close Playlist View */

const closePlaylistView = () => {

    activePlaylistId = null;

    playlistView.classList.remove('active');

    document.querySelector(
        '.section-heading'
    ).style.display = '';

    document.querySelector(
        '.language-row'
    ).style.display = '';

    document.querySelector(
        '.sort-container'
    ).style.display = '';

    searchResults.style.display = '';


    myPlaylistsSection.style.display = '';

    displayRecentlyPlayed();

    renderPagination(currentSongs);
};

playlistBackBtn.addEventListener(
    'click',
    closePlaylistView
);

const openAddSongsForActivePlaylist = () => {

    if (!activePlaylistId) {
        return;
    }

    selectedPlaylistSongs.clear();

    addSongsSearchInput.value = '';

    displayAddSongsList();

    updateSelectedSongsCount();

    addSongsModal.classList.add('active');

    addSongsModal.setAttribute(
        'aria-hidden',
        'false'
    );
};

playlistAddSongsBtn.addEventListener(
    'click',
    openAddSongsForActivePlaylist
);

playlistViewContent.addEventListener('click', (event) => {

    const button =
        event.target.closest('.playlist-add-songs-btn');

    if (!button) {
        return;
    }

    selectedPlaylistSongs.clear();

    addSongsSearchInput.value = '';

    displayAddSongsList();
    updateSelectedSongsCount();

    addSongsModal.classList.add('active');
    addSongsModal.setAttribute('aria-hidden', 'false');
});

playlistViewContent.addEventListener('click', (event) => {

    const button =
        event.target.closest('.playlist-song-play-btn');

    if (!button) {
        return;
    }

    event.stopPropagation();

    const songId =
        Number(button.dataset.songId);

    const playlist =
        playlists.find(
            (item) => item.id === activePlaylistId
        );

    if (!playlist) {
        return;
    }

    const playlistSongs =
        playlist.songs
            .map((id) =>
                songs.find((song) => song.id === id)
            )
            .filter(Boolean);

    const selectedIndex =
        playlistSongs.findIndex(
            (song) => song.id === songId
        );

    if (selectedIndex === -1) {
        return;
    }

    const selectedSong =
        playlistSongs[selectedIndex];

    currentSongs = [...playlistSongs];

    currentSongIndex = selectedIndex;

    queue = [...playlistSongs];

    queueIndex = selectedIndex;

    loadSong(
        selectedSong,
        true
    );

    renderQueue();
});

playlistViewContent.addEventListener('click', async (event) => {

    const button =
        event.target.closest('.playlist-song-remove-btn');

    if (!button) {
        return;
    }

    event.stopPropagation();

    const songId =
        Number(button.dataset.songId);

    const playlist =
        playlists.find(
            (item) => item.id === activePlaylistId
        );

    if (!playlist) {
        return;
    }

    const { error } =
        await supabaseClient
            .from('playlist_songs')
            .delete()
            .eq('playlist_id', playlist.id)
            .eq('song_id', String(songId));

    if (error) {
        console.error(
            'Failed to remove song from playlist:',
            error
        );

        showToast(
            'Failed to remove song from playlist.',
            'error'
        );

        return;
    }

    playlist.songs =
        playlist.songs.filter(
            (id) => id !== songId
        );

    playlistViewCount.textContent =
        `${playlist.songs.length} ${
            playlist.songs.length === 1
                ? 'song'
                : 'songs'
        }`;

    displayPlaylistSongs(playlist);

    displayPlaylists();

    myPlaylistsSection.style.display = 'none';

    showToast(
        'Song removed from playlist.'
    );

});

const closeAddSongsModal = () => {
    addSongsModal.classList.remove('active');
    addSongsModal.setAttribute('aria-hidden', 'true');
};

addSongsModalClose.addEventListener('click', closeAddSongsModal);

addSongsCancelBtn.addEventListener('click', closeAddSongsModal);

addSongsConfirmBtn.addEventListener(
    'click',
    addSelectedSongsToPlaylist
);

addSongsModal.addEventListener('click', (event) => {
    if (event.target === addSongsModal) {
        closeAddSongsModal();
    }
});

const displayAddSongsList = (songList = songs) => {
    addSongsList.innerHTML = '';

    if (!songList.length) {
        addSongsList.innerHTML = `
            <div class="add-songs-empty">
                No songs found
            </div>
        `;

        return;
    }

    songList.forEach((song) => {

        const songItem = document.createElement('div');

        songItem.className = 'add-song-item';

        songItem.innerHTML = `
            <img
                src="${song.cover}"
                alt="${song.title}"
            >

            <div class="add-song-info">

            <h4>${song.title}</h4>

            <p>
                ${song.artists || 'Unknown Artist'}
            </p>

            <span class="song-movie">
                ${song.movie || 'Unknown Movie'}
            </span>

            <span class="song-language">
                ${song.language}
            </span>

            </div>

            <input
                type="checkbox"
                class="add-song-checkbox"
                data-song-id="${song.id}"
                ${selectedPlaylistSongs.has(song.id) ? 'checked' : ''}
            >
        `;

        addSongsList.appendChild(songItem);
    });
};

const closeAddToPlaylistModal = () => {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }

    addToPlaylistModal.classList.remove('active');
    addToPlaylistModal.setAttribute('aria-hidden', 'true');

    songToAddToPlaylist = null;
};

const displayAddToPlaylistList = () => {

    addToPlaylistList.innerHTML = '';

    if (playlists.length === 0) {

        addToPlaylistList.innerHTML = `

            <div class="add-to-playlist-empty">
                <p>You don't have any playlists yet.</p>
                <button
                    type="button"
                    class="add-to-playlist-create-btn"
                    id="add-to-playlist-create-btn"
                >
                    ＋ Create Playlist
                </button>
            </div>
        `;

        return;
    }

    playlists.forEach((playlist) => {

        const playlistItem =
            document.createElement('button');

        playlistItem.type = 'button';

        playlistItem.className =
            'add-to-playlist-item';

        playlistItem.dataset.playlistId =
            playlist.id;

        const coverSongs =
            getPlaylistCoverSongs(playlist);

        let playlistCoverHTML = '';

        if (coverSongs.length === 0) {

            playlistCoverHTML = `
                <div class="add-to-playlist-icon">
                    ♫
                </div>
            `;

        } else {

            playlistCoverHTML = `
                <div class="add-to-playlist-cover">
                    ${coverSongs.map((song) => `
                        <img
                            src="${song.cover}"
                            alt=""
                            loading="lazy"
                        >
                    `).join('')}
                </div>
            `;

        }

        playlistItem.innerHTML = `
            ${playlistCoverHTML}

            <div class="add-to-playlist-info">
                <h3>${playlist.name}</h3>
                <p>
                    ${playlist.songs.length}
                    ${playlist.songs.length === 1 ? 'song' : 'songs'}
                </p>
            </div>

            <span class="add-to-playlist-arrow">
                →
            </span>
        `;

        addToPlaylistList.appendChild(
            playlistItem
        );
    });
};

const openAddToPlaylistModal = (song) => {

    if (!song) {
        return;
    }

    songToAddToPlaylist = song;

    addToPlaylistSongName.textContent =
        `Add "${song.title}" to a playlist`;

    displayAddToPlaylistList();

    addToPlaylistModal.classList.add('active');

    addToPlaylistModal.setAttribute(
        'aria-hidden',
        'false'
    );
};

addToPlaylistList.addEventListener(
    'click',
    async (event) => {

        const createButton =
            event.target.closest('.add-to-playlist-create-btn');

        if (createButton) {

            closeAddToPlaylistModal();

            openPlaylistModal();

            return;
        }

        const playlistItem =
            event.target.closest('.add-to-playlist-item');

        if (!playlistItem) {
            return;
        }

        const playlistId =
            Number(playlistItem.dataset.playlistId);

        const playlist =
            playlists.find(
                (item) => item.id === playlistId
            );

        if (!playlist || !songToAddToPlaylist) {
            return;
        }

        if (playlist.songs.includes(songToAddToPlaylist.id)) {
            showToast(
                'Song is already in this playlist.',
                'info'
            );
            return;
        }

        const { error } =
            await supabaseClient
                .from('playlist_songs')
                .insert({
                    playlist_id: playlist.id,
                    song_id: String(songToAddToPlaylist.id)
                });

        if (error) {
            console.error(
                'Failed to add song to playlist:',
                error
            );

            showToast(
                'Failed to add song to playlist.',
                'error'
            );

            return;
        }

        playlist.songs.push(
            songToAddToPlaylist.id
        );

        displayPlaylists();

        closeAddToPlaylistModal();

        showToast(
            'Song added to playlist.'
        );
    }
);

addToPlaylistModalClose.addEventListener(
    'click',
    closeAddToPlaylistModal
);

addToPlaylistModal.addEventListener(
    'click',
    (event) => {

        if (event.target === addToPlaylistModal) {
            closeAddToPlaylistModal();
        }

    }
);

const filterAddSongs = () => {
    const query = addSongsSearchInput.value.trim().toLowerCase();

    const filteredSongs = songs.filter((song) => {
        const title = String(song.title || '').toLowerCase();
        const artist = String(song.artists || '').toLowerCase();
        const movie = String(song.movie || '').toLowerCase();
        const language = String(song.language || '').toLowerCase();

        return (
            title.includes(query) ||
            artist.includes(query) ||
            movie.includes(query) ||
            language.includes(query)
        );
    });

    displayAddSongsList(filteredSongs);
};

addSongsSearchInput.addEventListener('input', filterAddSongs);

/* Load Song */

const loadSong =
    (
        song,
        shouldPlay = false
    ) => {

        if (!song) {
            return;
        }

        disk.classList.remove('empty');

        songName.textContent =
            song.title || 'Unknown Song';

        artistName.textContent =
            song.artists || 'Unknown Artist';

        movieName.textContent =
            song.movie || 'Unknown Movie';


        if (song.cover) {

            disk.style.backgroundImage =
                `url("${song.cover}")`;

        } else {

            disk.style.backgroundImage =
                'none';

        }

        const isFavorite =
            favoriteSongs.has(song.id);

        trackFavoriteBtn.textContent =
            isFavorite ? '♥' : '♡';

        trackFavoriteBtn.setAttribute(
            'aria-label',
            isFavorite
                ? 'Remove from favorites'
                : 'Add to favorites'
        );

        trackFavoriteBtn.setAttribute(
            'title',
            isFavorite
                ? 'Remove from favorites'
                : 'Add to favorites'
        );

        trackFavoriteBtn.classList.toggle(
            'active',
            isFavorite
        );

        audio.pause();

        resetDiskRotation(shouldPlay);

        audio.src =
            song.audio || '';

        audio.load();

        seekBar.min = 0;

        seekBar.max = 0;

        seekBar.value = 0;

        currentTime.textContent =
            '00:00';

        musicDuration.textContent =
            '00:00';

        if (shouldPlay && song.audio) {
            playSong();
        } else {
            updatePlayButton(false);
        }
    };

const syncRecentlyPlayedWithSupabase = async (
    songId
) => {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        return;
    }

    const { error } =
        await supabaseClient
            .from('recently_played')
            .insert({
                user_id: session.user.id,
                song_id: songId
            });

    if (error) {
        console.error(
            'Failed to save recently played:',
            error.message,
            error.details,
            error.hint,
            error.code
        );
    }
};

const removeRecentlyPlayedFromSupabase = async (songId) => {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        return false;
    }

    const { error } =
        await supabaseClient
            .from('recently_played')
            .delete()
            .eq('user_id', session.user.id)
            .eq('song_id', songId);

    if (error) {
        console.error(
            'Failed to remove recently played:',
            error
        );

        return false;
    }

    return true;
};

const loadPlaylistsFromSupabase = async () => {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        playlists = [];
        displayPlaylists();
        return;
    }

    const {
        data,
        error
    } = await supabaseClient
        .from('playlists')
        .select('id, name, created_at')
        .eq(
            'user_id',
            session.user.id
        )
        .order('created_at', {
            ascending: true
        });

    if (error) {
        console.error(
            'Failed to load playlists:',
            error
        );
        return;
    }

    const playlistIds = data.map(
        playlist => playlist.id
    );

    let playlistSongsData = [];

    if (playlistIds.length > 0) {

        const {
            data: songData,
            error: songError
        } = await supabaseClient
            .from('playlist_songs')
            .select('playlist_id, song_id')
            .in(
                'playlist_id',
                playlistIds
            );

        if (songError) {

            console.error(
                'Failed to load playlist songs:',
                songError
            );

            return;
        }

        playlistSongsData = songData || [];
    }

    playlists = data.map(
        playlist => ({
            id: playlist.id,
            name: playlist.name,
            songs: playlistSongsData
                .filter(
                    item =>
                        item.playlist_id ===
                        playlist.id
                )
                .map(
                    item =>
                        Number(item.song_id)
                )
        })
    );

    displayPlaylists();
};

const loadRecentlyPlayedFromSupabase = async () => {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        recentlyPlayed = [];
        displayRecentlyPlayed();
        return;
    }

    const {
        data,
        error
    } = await supabaseClient
        .from('recently_played')
        .select('song_id, played_at')
        .eq('user_id', session.user.id)
        .order('played_at', {
            ascending: false
        })
        .limit(10);

    if (error) {
        console.error(
            'Failed to load recently played:',
            error
        );
        return;
    }

    recentlyPlayed = data.map(
        item => Number(item.song_id)
    );

    displayRecentlyPlayed();
};

/* Recently Played */

const addToRecentlyPlayed = async (song) => {
    if (!song) {
        return;
    }

    recentlyPlayed =
        recentlyPlayed.filter(
            id => id !== song.id
        );

    recentlyPlayed.unshift(song.id);

    recentlyPlayed =
        recentlyPlayed.slice(0, 10);

    await syncRecentlyPlayedWithSupabase(song.id);

};

clearRecentBtn.addEventListener(
    'click',
    async () => {

        const {
            data: {
                session
            }
        } = await supabaseClient.auth.getSession();

        if (!session) {
            return;
        }

        const { error } =
            await supabaseClient
                .from('recently_played')
                .delete()
                .eq(
                    'user_id',
                    session.user.id
                );

        if (error) {
            console.error(
                'Failed to clear recently played:',
                error
            );

            showToast(
                'Failed to clear recently played.',
                'error'
            );

            return;
        }

        recentlyPlayed = [];

        displayRecentlyPlayed();

        showToast(
            'Recently played cleared.'
        );

    }
);

playRecentBtn.addEventListener(
    'click',
    () => {

        if (recentlyPlayed.length === 0) {
            
            return;
        }

        const recentSongs = recentlyPlayed
            .map(id =>
                songs.find(song => song.id === id)
            )
            .filter(Boolean);

        if (recentSongs.length === 0) {

            return;
        }

        createQueue(recentSongs, 0);

        const firstSong = recentSongs[0];

        currentSongIndex =
            currentSongs.findIndex(
                song => song.id === firstSong.id
            );

        loadSong(firstSong, true);
    }
);

/* Play */

const playSong = async () => {
    if (!audio.src) return;

    try {
        await audio.play();

       const currentSong =
            currentSongs.find(
                song =>
                    song.id ===
                    queue[queueIndex]?.id
            );

        if (!activePlaylistId) {
            addToRecentlyPlayed(currentSong);
            displayRecentlyPlayed();
        }

    } catch (error) {
        console.error(
            'Audio playback error:',
            error
        );

        updatePlayButton(false);
    }
};

/* Pause */

const pauseSong =
    () => {

        audio.pause();

    };

/* Play / Pause Button */

playBtn.addEventListener(
    'click',
    () => {

        if (!audio.src) {

            if (currentSongs.length > 0) {

                loadSong(
                    currentSongs[
                        currentSongIndex
                    ],
                    true
                );
            }

            return;
        }

        if (audio.paused) {

            playSong();

        } else {

            pauseSong();

        }
    }
);

/* Next Song */

const nextSong = () => {

    if (queue.length === 0) {
        return;
    }

    if (queueIndex === queue.length - 1) {

        if (repeatMode === 'all') {

            queueIndex = 0;

        } else {

            updatePlayButton(false);

            audio.currentTime = 0;

            renderQueue();

            return;
        }

    } else {

        queueIndex++;
    }

    const next =
        queue[queueIndex];

    currentSongIndex =
        currentSongs.findIndex(
            song => song.id === next.id
        );

    loadSong(
        next,
        true
    );

    renderQueue(true);
};


forwardBtn.addEventListener(
    'click',
    nextSong
);

/* Previous Song */

const previousSong = () => {

    if (queue.length === 0) {
        return;
    }

    queueIndex =
        (
            queueIndex - 1 + queue.length
        ) % queue.length;

    const previous = queue[queueIndex];

    currentSongIndex =
        currentSongs.findIndex(
            song => song.id === previous.id
        );

    loadSong(previous, true);

    renderQueue();
};

backwardBtn.addEventListener(
    'click',
    previousSong
);

/* Audio Metadata */

audio.addEventListener(
    'loadedmetadata',
    () => {

        if (
            Number.isFinite(
                audio.duration
            )
        ) {

            seekBar.min = 0;
            seekBar.max = 100;

            const progress =
                audio.duration > 0
                    ? (audio.currentTime / audio.duration) * 100
                    : 0;

            seekBar.value = progress;

            seekBar.style.setProperty(
                "--progress",
                `${progress}%`
            );

            musicDuration.textContent =
                formatTime(
                    audio.duration
                );

            currentTime.textContent =
                formatTime(
                    audio.currentTime || 0
                );
        }
    }
);

/* Audio Time Update */

audio.addEventListener("timeupdate", () => {
    if (!isSeeking) {
        updateSeekUI();
    }
});

/* Seek - Start */

seekBar.addEventListener(
    'pointerdown',
    () => {

        isSeeking = true;

    }
);

/* Seek - Move */

seekBar.addEventListener("input", () => {
    const duration = audio.duration;

    if (!Number.isFinite(duration) || duration <= 0) {
        return;
    }

    const progress = Number(seekBar.value);

    const newTime = (progress / 100) * duration;

    audio.currentTime = newTime;

    currentTime.textContent = formatTime(newTime);

    seekBar.style.setProperty(
        "--progress",
        `${progress}%`
    );
});

/* Seek - End */

seekBar.addEventListener(
    'change',
    () => {

        isSeeking = false;

    }
);

document.addEventListener(
    'pointerup',
    () => {

        isSeeking = false;

    }
);

/* Song Ended */

audio.addEventListener(
    'ended',
    () => {

        if (repeatMode === 'one') {

            audio.currentTime = 0;

            playSong();

            return;
        }

        nextSong();

    }
);

/* Audio Play Event */

audio.addEventListener("play", () => {

    updatePlayButton(true);
    startSeekAnimation();
});

/* Audio Pause Event */

audio.addEventListener("pause", () => {

    updatePlayButton(false);
    stopSeekAnimation();

    updateSeekUI();
});

/* Audio Error Event */

audio.addEventListener(
    'error',
    () => {

        console.error(
            'Unable to load audio:',
            audio.src
        );

        console.error(
            audio.error
        );

        updatePlayButton(false);

    }
);

/* Display Songs */

const displaySongs =
    (songList) => {

        searchResults.innerHTML = '';

        if (
            !songList ||
            songList.length === 0
        ) {

            searchResults.innerHTML = `
                <p class="empty-message">
                    No songs found.
                </p>
            `;

            return;
        }

        const startIndex =
            (currentPage - 1) * songsPerPage;

        const endIndex =
            startIndex + songsPerPage;

        const paginatedSongs =
            songList.slice(
                startIndex,
                endIndex
            );

        paginatedSongs.forEach(
            (song) => {

                const songCard =
                    document.createElement(
                        'div'
                    );

                songCard.className =
                    'song-card';

                songCard.setAttribute(
                    'tabindex',
                    '0'
                );

                songCard.setAttribute(
                    'role',
                    'button'
                );

                songCard.innerHTML = `

                    <img
                        src="${song.cover}"
                        alt="${song.title}"
                        loading="lazy"
                    >

                    <div class="song-card-info">

                        <div class="song-card-details">

                            <h3>
                                ${highlightSearchMatch(
                                    song.title,
                                    searchQuery
                                )}
                            </h3>

                            <p>
                                ${highlightSearchMatch(
                                    song.artists || 'Unknown Artist',
                                    searchQuery
                                )}
                            </p>

                            <span class="song-movie">
                                ${highlightSearchMatch(
                                    song.movie || 'Unknown Movie',
                                    searchQuery
                                )}
                            </span>

                            <div class="song-language-row">

                                <span class="song-language">
                                    ${song.language}
                                </span>

                                <div class="song-action-buttons">

                                    <button
                                        class="favorite-btn"
                                        type="button"
                                        aria-label="${
                                            favoriteSongs.has(song.id)
                                                ? 'Remove from favorites'
                                                : 'Add to favorites'
                                        }"
                                        title="${
                                            favoriteSongs.has(song.id)
                                                ? 'Remove from favorites'
                                                : 'Add to favorites'
                                        }"
                                    >
                                        ${favoriteSongs.has(song.id) ? '♥' : '♡'}
                                    </button>

                                    <button
                                        class="add-to-playlist-btn"
                                        type="button"
                                        data-song-id="${song.id}"
                                        aria-label="Add ${song.title} to playlist"
                                        title="Add to playlist"
                                    >
                                        ＋
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                `;

                const selectSong =
                () => {

                    const selectedIndex =
                        currentSongs.findIndex(
                            item => item.id === song.id
                        );

                    if (selectedIndex !== -1) {
                        currentSongIndex = selectedIndex;
                    }

                    queue = [...currentSongs];
                    queueIndex = selectedIndex;

                    loadSong(
                        song,
                        true
                    );

                    renderQueue();
                };

                songCard.addEventListener(
                    'click',
                    selectSong
                );

                const favoriteBtn =
                    songCard.querySelector('.favorite-btn');

                favoriteBtn.addEventListener(
                    'click',
                    async(event) => {

                        event.stopPropagation();

                        if (favoriteSongs.has(song.id)) {

                            favoriteSongs.delete(song.id);

                            favoriteBtn.textContent = '♡';

                            favoriteBtn.setAttribute(
                                'aria-label',
                                'Add to favorites'
                            );

                            favoriteBtn.setAttribute(
                                'title',
                                'Add to favorites'
                            );

                            showToast(
                                'Removed from favorites.'
                            );
                        } else {

                            favoriteSongs.add(song.id);

                            favoriteBtn.textContent = '♥';

                            favoriteBtn.setAttribute(
                                'aria-label',
                                'Remove from favorites'
                            );

                            favoriteBtn.setAttribute(
                                'title',
                                'Remove from favorites'
                            );

                            showToast(
                                'Added to favorites.'
                            );
                        }

                        favoriteBtn.classList.toggle(
                            'active',
                            favoriteSongs.has(song.id)
                        );

                        await syncFavoriteWithSupabase(
                            song.id,
                            favoriteSongs.has(song.id)
                        );

                    }
                );

                const addToPlaylistBtn =
                    songCard.querySelector('.add-to-playlist-btn');

                addToPlaylistBtn.addEventListener(
                    'click',
                    (event) => {

                        event.stopPropagation();

                        openAddToPlaylistModal(song);
                    }
                );

                songCard.addEventListener(
                    'keydown',
                    (event) => {

                        if (
                            event.key === 'Enter' ||
                            event.key === ' '
                        ) {

                            event.preventDefault();

                            selectSong();

                        }
                    }
                );

                searchResults.appendChild(
                    songCard
                );

            }
        );

    };

/* Pagination */

const pagination =
    document.querySelector('#pagination');

const renderPagination =
    (songList) => {

        pagination.innerHTML = '';

        const totalPages =
            Math.ceil(
                songList.length /
                songsPerPage
            );

        if (totalPages <= 1) {
            pagination.style.display = 'none';
            return;
        }

        pagination.style.display = 'flex';

        const previousBtn =
            document.createElement('button');

        previousBtn.type = 'button';
        previousBtn.textContent = '←';
        previousBtn.className = 'pagination-btn';

        previousBtn.disabled =
            currentPage === 1;

        previousBtn.addEventListener(
            'click',
            () => {

                if (currentPage > 1) {

                    currentPage--;

                    displaySongs(songList);
                    renderPagination(songList);

                   window.scrollTo({
                        top: sectionTitle.offsetTop - 30,
                        behavior: 'smooth'
                    });
                }
            }
        );

        pagination.appendChild(previousBtn);

        for (
            let page = 1;
            page <= totalPages;
            page++
        ) {

            const pageBtn =
                document.createElement('button');

            pageBtn.type = 'button';
            pageBtn.textContent = page;
            pageBtn.className = 'pagination-btn';

            if (page === currentPage) {
                pageBtn.classList.add('active');
            }

            pageBtn.addEventListener(
                'click',
                () => {

                    currentPage = page;

                    displaySongs(songList);
                    renderPagination(songList);

                    window.scrollTo({
                        top: sectionTitle.offsetTop - 30,
                        behavior: 'smooth'
                    });
                }
            );

            pagination.appendChild(pageBtn);
        }

        const nextBtn =
            document.createElement('button');

        nextBtn.type = 'button';
        nextBtn.textContent = '→';
        nextBtn.className = 'pagination-btn';

        nextBtn.disabled =
            currentPage === totalPages;

        nextBtn.addEventListener(
            'click',
            () => {

                if (
                    currentPage <
                    totalPages
                ) {

                    currentPage++;

                    displaySongs(songList);
                    renderPagination(songList);

                    window.scrollTo({
                        top: sectionTitle.offsetTop - 30,
                        behavior: 'smooth'
                    });
                }
            }
        );

        pagination.appendChild(nextBtn);
    };

/* Highlight Search Match */

const highlightSearchMatch =
    (text, query) => {

        const value =
            String(text || '');

        const search =
            String(query || '').trim();

        if (!search) {
            return value;
        }

        const escapedSearch =
            search.replace(
                /[.*+?^${}()|[\]\\]/g,
                '\\$&'
            );

        const regex =
            new RegExp(
                `(${escapedSearch})`,
                'gi'
            );

        return value.replace(
            regex,
            '<mark class="search-highlight">$1</mark>'
        );
    };

sortSelect.addEventListener(
    'change',
    () => {

        selectedSort =
            sortSelect.value;

        applyFilters();

    }
);

/* Display Recently Played */

const displayRecentlyPlayed = () => {

    const recentSongs = recentlyPlayed
        .map(id =>
            songs.find(song => song.id === id)
        )
        .filter(Boolean);

    if (recentSongs.length === 0) {
        recentlyPlayedSection.style.display = 'none';
        return;
    }

    recentlyPlayedSection.style.display = 'block';

    recentlyPlayedCount.textContent =
        `${recentSongs.length} ${
            recentSongs.length === 1
                ? 'song'
                : 'songs'
        }`;

    recentlyPlayedResults.innerHTML = '';

    recentSongs.forEach((song) => {

        const songCard =
            document.createElement('div');

        songCard.className = 'song-card';

        songCard.setAttribute('tabindex', '0');
        songCard.setAttribute('role', 'button');

        songCard.innerHTML = `
            <img
                src="${song.cover}"
                alt="${song.title}" 
                loading="lazy"
            >

            <div class="song-card-info">

                <div class="song-card-details">

                    <h3>
                        ${highlightSearchMatch(
                            song.title,
                            searchQuery
                        )}
                    </h3>

                    <p>
                        ${highlightSearchMatch(
                            song.artists || 'Unknown Artist',
                            searchQuery
                        )}
                    </p>

                    <span class="song-movie">
                        ${highlightSearchMatch(
                            song.movie || 'Unknown Movie',
                            searchQuery
                        )}
                    </span>

                    <div class="song-language-row">

                        <span class="song-language">
                            ${song.language}
                        </span>

                        <div class="song-action-buttons">

                            <button
                                class="favorite-btn"
                                type="button"
                                aria-label="${
                                    favoriteSongs.has(song.id)
                                        ? 'Remove from favorites'
                                        : 'Add to favorites'
                                }"
                                title="${
                                    favoriteSongs.has(song.id)
                                        ? 'Remove from favorites'
                                        : 'Add to favorites'
                                }"
                            >
                                ${favoriteSongs.has(song.id) ? '♥' : '♡'}
                            </button>

                            <button
                                class="add-to-playlist-btn"
                                type="button"
                                data-song-id="${song.id}"
                                aria-label="Add ${song.title} to playlist"
                                title="Add to playlist"
                            >
                                ＋
                            </button>

                            <button
                                class="recent-remove-btn"
                                type="button"
                                aria-label="Remove ${song.title} from recently played"
                                title="Remove from recently played"
                            >
                                ✕
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `;

        const selectSong = () => {

            const index =
                currentSongs.findIndex(
                    item => item.id === song.id
                );

            if (index !== -1) {
                currentSongIndex = index;
            }

            queue = [...currentSongs];

            queueIndex =
                currentSongs.findIndex(
                    item => item.id === song.id
                );

            loadSong(song, true);

            renderQueue();
        };

        songCard.addEventListener(
            'click',
            selectSong
        );

        const favoriteBtn =
            songCard.querySelector('.favorite-btn');

        favoriteBtn.addEventListener(
            'click',
            async(event) => {

                event.stopPropagation();

                if (favoriteSongs.has(song.id)) {

                    favoriteSongs.delete(song.id);

                    favoriteBtn.textContent = '♡';

                    favoriteBtn.setAttribute(
                        'aria-label',
                        'Add to favorites'
                    );

                    favoriteBtn.setAttribute(
                        'title',
                        'Add to favorites'
                    );

                    showToast(
                        'Removed from favorites.'
                    );

                } else {

                    favoriteSongs.add(song.id);

                    favoriteBtn.textContent = '♥';

                    favoriteBtn.setAttribute(
                        'aria-label',
                        'Remove from favorites'
                    );

                    favoriteBtn.setAttribute(
                        'title',
                        'Remove from favorites'
                    );

                    showToast(
                        'Added to favorites.'
                    );
                }

                favoriteBtn.classList.toggle(
                    'active',
                    favoriteSongs.has(song.id)
                );

                await syncFavoriteWithSupabase(
                    song.id,
                    favoriteSongs.has(song.id)
                );
            }
        );

        const addToPlaylistBtn =
            songCard.querySelector('.add-to-playlist-btn');

        addToPlaylistBtn.addEventListener(
            'click',
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                openAddToPlaylistModal(song);
            }
        );

        const removeRecentBtn =
            songCard.querySelector('.recent-remove-btn');

        removeRecentBtn.addEventListener(
            'click',
            async (event) => {

                event.preventDefault();
                event.stopPropagation();

                const removed =
                    await removeRecentlyPlayedFromSupabase(
                        song.id
                    );

                if (!removed) {
                    showToast(
                        'Failed to remove song from recently played.',
                        'error'
                    );
                    return;
                }

                recentlyPlayed =
                    recentlyPlayed.filter(
                        id => id !== song.id
                    );

                displayRecentlyPlayed();

                showToast(
                    'Song removed from recently played.'
                );

            }
        );

        songCard.addEventListener(
            'keydown',
            (event) => {

                if (
                    event.key === 'Enter' ||
                    event.key === ' '
                ) {

                    event.preventDefault();

                    selectSong();
                }
            }
        );

        recentlyPlayedResults.appendChild(
            songCard
        );
    });
};

const updateSelectedSongsCount = () => {
    const count = selectedPlaylistSongs.size;

    selectedSongsCount.textContent =
        `${count} ${count === 1 ? 'song' : 'songs'} selected`;
};

addSongsList.addEventListener('change', (event) => {
    if (!event.target.classList.contains('add-song-checkbox')) {
        return;
    }

    const songId = Number(event.target.dataset.songId);

    if (event.target.checked) {
        selectedPlaylistSongs.add(songId);
    } else {
        selectedPlaylistSongs.delete(songId);
    }

    updateSelectedSongsCount();
});

/* Search */

const searchSongs =
    (query) => {

        searchQuery =
            String(query || '')
                .trim()
                .toLowerCase();

        applyFilters();

    };

/* Search Button */

searchBtn.addEventListener(
    'click',
    () => {

        searchSongs(
            searchInput.value
        );

    }
);

/* Live Search */

searchInput.addEventListener(
    'input',
    () => {

        searchSongs(
            searchInput.value
        );

        clearSearchBtn.style.display =
            searchInput.value.trim()
                ? 'flex'
                : 'none';

    }
);

/* Clear Search */

clearSearchBtn.addEventListener(
    'click',
    () => {

        searchInput.value = '';

        searchSongs('');

        clearSearchBtn.style.display = 'none';

        searchInput.focus();

    }
);

/* Apply Search + Language */

const applyFilters = () => {

    currentSongs =
        songs.filter((song) => {

            const songLanguage =
                String(song.language || '')
                    .toLowerCase();

            const language =
                String(song.language || '')
                    .toLowerCase();

            const title =
                String(song.title || '')
                    .toLowerCase();

            const artist =
                String(song.artists || '')
                    .toLowerCase();

            const genre =
                String(song.genre || '')
                    .toLowerCase();

            const movie =
                String(song.movie || '')
                    .toLowerCase();

            const matchesLanguage =
                selectedLanguage === 'all' ||
                songLanguage ===
                    selectedLanguage.toLowerCase();

            const matchesSearch =
                !searchQuery ||
                title.includes(searchQuery) ||
                artist.includes(searchQuery) ||
                movie.includes(searchQuery) ||
                language.includes(searchQuery) ||
                genre.includes(searchQuery);

            const matchesFavorites =
                !showFavoritesOnly ||
                favoriteSongs.has(song.id);

            return (
                matchesLanguage &&
                matchesSearch &&
                matchesFavorites
            );

        });

    /* Sort Songs */

    if (
        selectedSort === 'az' ||
        selectedSort === 'za'
    ) {

        currentSongs.sort((a, b) => {

            const comparison =
                String(a.title || '').localeCompare(
                    String(b.title || ''),
                    undefined,
                    {
                        sensitivity: 'base'
                    }
                );

            return selectedSort === 'az'
                ? comparison
                : -comparison;

        });

    } else if (
        selectedSort === 'newest' ||
        selectedSort === 'oldest'
    ) {

        currentSongs.sort((a, b) => {

            const yearA =
                Number(a.year) || 0;

            const yearB =
                Number(b.year) || 0;

            return selectedSort === 'newest'
                ? yearB - yearA
                : yearA - yearB;

        });

    }

    currentSongIndex = 0;

    currentPage = 1;

    createQueue(
        currentSongs,
        0
    );

    displaySongs(
        currentSongs
    );

    renderPagination(
        currentSongs
    );

    /* Section Title */

    if (showFavoritesOnly) {

        if (
            selectedLanguage !== 'all' &&
            searchQuery
        ) {

            sectionTitle.textContent =
                `Favorite ${selectedLanguage} results for "${searchQuery}"`;

        } else if (
            selectedLanguage !== 'all'
        ) {

            sectionTitle.textContent =
                `Favorite ${selectedLanguage} Songs`;

        } else if (searchQuery) {

            sectionTitle.textContent =
                `Favorite results for "${searchQuery}"`;

        } else {

            sectionTitle.textContent =
                'Favorite Songs';

        }

    } else if (
        selectedLanguage === 'all' &&
        !searchQuery
    ) {

        sectionTitle.textContent =
            'Trending Now';

    } else if (
        selectedLanguage !== 'all' &&
        searchQuery
    ) {

        sectionTitle.textContent =
            `${selectedLanguage} results for "${searchQuery}"`;

    } else if (
        selectedLanguage !== 'all'
    ) {

        sectionTitle.textContent =
            `${selectedLanguage} Songs`;

    } else {

        sectionTitle.textContent =
            `Results for "${searchQuery}"`;

    }

    /* Result Count */

    const resultCount =
        currentSongs.length;

    songCount.textContent =
        `${resultCount} ${
            resultCount === 1 ? 'Song' : 'Songs'
        }`;

    const totalPages =
    Math.ceil(
        currentSongs.length /
        songsPerPage
    );

    pageInfo.textContent =
        currentSongs.length > songsPerPage
            ? `${songsPerPage} per page · ${totalPages} pages`
            : '';

};

/* Language Filter */

const filterByLanguage = (language) => {

    selectedLanguage = language;

    applyFilters();

};

languageFilter.addEventListener(
    'click',
    (event) => {

        const button =
            event.target.closest('.language-btn');

        if (!button) {
            return;
        }

        const language =
            button.dataset.language;

        document
            .querySelectorAll('.language-btn')
            .forEach((btn) => {

                btn.classList.remove('active');

            });

        button.classList.add('active');

        filterByLanguage(language);
    }
);

/* Favorites Header Button */

favoritesHeaderBtn.addEventListener(
    'click',
    () => {

        showFavoritesOnly =
            !showFavoritesOnly;

        favoritesHeaderBtn.classList.toggle(
            'active',
            showFavoritesOnly
        );

        favoritesHeaderBtn.setAttribute(
            'aria-label',
            showFavoritesOnly
                ? 'Show all songs'
                : 'Show favorites'
        );

        favoritesHeaderBtn.setAttribute(
            'title',
            showFavoritesOnly
                ? 'Show all songs'
                : 'Show favorites'
        );

        applyFilters();

    }
);

/* Enter Key */

searchInput.addEventListener(
    'keydown',
    (event) => {

        if (
            event.key === 'Enter'
        ) {

            searchSongs(
                searchInput.value
            );

        }
    }
);

/* Shuffle */

function shuffleQueue() {

    if (queue.length <= 1) {
        return;
    }

    const currentSong = queue[queueIndex];

    const remainingSongs =
        queue.filter(
            song => song.id !== currentSong.id
        );

    for (
        let i = remainingSongs.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            remainingSongs[i],
            remainingSongs[randomIndex]
        ] = [
            remainingSongs[randomIndex],
            remainingSongs[i]
        ];
    }

    queue = [
        currentSong,
        ...remainingSongs
    ];

    queueIndex = 0;

    renderQueue();
}

shuffleBtn.addEventListener(
    'click',
    () => {

        isShuffleOn =
            !isShuffleOn;

        shuffleBtn.classList.toggle(
            'active',
            isShuffleOn
        );

        shuffleBtn.setAttribute(
            'aria-label',
            isShuffleOn
                ? 'Shuffle on'
                : 'Shuffle off'
        );

        if (isShuffleOn) {

            shuffleQueue();

        } else {

            const currentSong =
                queue[queueIndex];

            queue = [...currentSongs];

            queueIndex =
                queue.findIndex(
                    song =>
                        song.id ===
                        currentSong?.id
                );

            if (queueIndex === -1) {
                queueIndex = 0;
            }

            renderQueue();
        }

    }
);

/* Repeat */

repeatBtn.addEventListener(
    'click',
    () => {

        if (repeatMode === 'off') {

            repeatMode = 'all';

            repeatBtn.innerHTML = `
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                >
                    <path
                        d="M17 2l4 4-4 4
                        M3 11V9a3 3 0 0 1 3-3h15
                        M7 22l-4-4 4-4
                        M21 13v2a3 3 0 0 1-3 3H3"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            `;

            repeatBtn.setAttribute(
                'aria-label',
                'Repeat all'
            );

            repeatBtn.setAttribute(
                'title',
                'Repeat all'
            );

        } else if (repeatMode === 'all') {

            repeatMode = 'one';

            repeatBtn.innerHTML = `
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                >
                    <path
                        d="M17 2l4 4-4 4
                        M3 11V9a3 3 0 0 1 3-3h15
                        M7 22l-4-4 4-4
                        M21 13v2a3 3 0 0 1-3 3H3"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <text
                        x="12"
                        y="15"
                        text-anchor="middle"
                        fill="currentColor"
                        font-size="7"
                        font-family="Arial, sans-serif"
                        font-weight="700"
                    >1</text>
                </svg>
            `;

            repeatBtn.setAttribute(
                'aria-label',
                'Repeat one'
            );

            repeatBtn.setAttribute(
                'title',
                'Repeat one'
            );

        } else {

            repeatMode = 'off';

            repeatBtn.innerHTML = `
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                >
                    <path
                        d="M17 2l4 4-4 4
                        M3 11V9a3 3 0 0 1 3-3h15
                        M7 22l-4-4 4-4
                        M21 13v2a3 3 0 0 1-3 3H3"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            `;

            repeatBtn.setAttribute(
                'aria-label',
                'Repeat off'
            );

            repeatBtn.setAttribute(
                'title',
                'Repeat off'
            );

        }

        repeatBtn.classList.toggle(
            'active',
            repeatMode !== 'off'
        );

    }
);

/* Queue */

function createQueue(songList, startIndex = 0) {

    if (!songList || songList.length === 0) {
        queue = [];
        queueIndex = 0;
        renderQueue();
        return;
    }

    queue = [...songList];
    queueIndex = startIndex;

    renderQueue();
}

function renderQueue() {

    queueList.innerHTML = '';

    if (queue.length === 0) {

        queueCount.textContent = '0 songs';

        queueList.innerHTML = `
            <p class="queue-empty">
                No songs in queue.
            </p>
        `;

        return;
    }

    queueCount.textContent =
        `${queue.length} ${queue.length === 1 ? 'song' : 'songs'}`;


    const displayQueue = [
        ...queue.slice(queueIndex),
        ...queue.slice(0, queueIndex)
    ];

    displayQueue.forEach((song) => {

        const index =
            queue.indexOf(song);

        const queueItem =
            document.createElement('div');

        queueItem.className = 'queue-item';

        if (index === queueIndex) {
            queueItem.classList.add('active');
        }

        queueItem.innerHTML = `
            <img
                src="${song.cover}"
                alt="${song.title}"
            >

            <div class="queue-song-info">

                <h4>${song.title}</h4>

                <p>
                    ${song.artists || 'Unknown Artist'}
                </p>

                <div class="queue-song-bottom">

                    <span class="song-movie">
                        ${song.movie || 'Unknown Movie'}
                    </span>

                    <span class="queue-song-duration">
                        00:00
                    </span>

                </div>

            </div>

            <button
                class="queue-remove-btn"
                type="button"
                aria-label="Remove ${song.title} from queue"
                title="Remove from queue"
            >
                ✕
            </button>
        `;

        const durationElement =
            queueItem.querySelector(
                '.queue-song-duration'
            );

        const queueAudio =
            new Audio(song.audio);

        queueAudio.preload = 'metadata';

        queueAudio.addEventListener(
            'loadedmetadata',
            () => {

                if (
                    Number.isFinite(
                        queueAudio.duration
                    )
                ) {

                    durationElement.textContent =
                        formatTime(
                            queueAudio.duration
                        );

                }
            }
        );

        /* Play Queue Song */

        queueItem.addEventListener(
            'click',
            (event) => {

                if (
                    event.target.closest(
                        '.queue-remove-btn'
                    )
                ) {
                    return;
                }

                queueIndex = index;

                currentSongIndex =
                    currentSongs.findIndex(
                        item => item.id === song.id
                    );

                loadSong(
                    song,
                    true
                );

                renderQueue();

            }
        );

        /* Remove From Queue */

        const removeBtn =
            queueItem.querySelector(
                '.queue-remove-btn'
            );

        removeBtn.addEventListener(
            'click',
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                if (index === queueIndex) {

                    return;
                }

                queue.splice(index, 1);

                if (index < queueIndex) {
                    queueIndex--;
                }

                renderQueue();

            }
        );

        queueList.appendChild(
            queueItem
        );

    });
    
}

/* Initialize */

const initializePlayer =
    () => {

        currentSongs =
            [...songs];

        currentSongIndex = 0;

        currentPage = 1;

        displaySongs(
            currentSongs
        );

        renderPagination(
            currentSongs
        );

        songName.textContent = 'No song selected';
        artistName.textContent = 'Select a song to start listening';
        movieName.textContent = '';

        disk.style.backgroundImage = 'none';
        disk.classList.add('empty');

        audio.pause();
        audio.removeAttribute('src');
        audio.load();

        seekBar.min = 0;
        seekBar.max = 0;
        seekBar.value = 0;

        currentTime.textContent = '00:00';
        musicDuration.textContent = '00:00';

        trackFavoriteBtn.textContent = '♡';

        trackFavoriteBtn.setAttribute(
            'aria-label',
            'Add to favorites'
        );

        trackFavoriteBtn.setAttribute(
            'title',
            'Add to favorites'
        );

        trackFavoriteBtn.classList.remove('active');

        updatePlayButton(false);

    };

function updateSeekUI() {

    const duration = audio.duration;

    if (!Number.isFinite(duration) || duration <= 0) {
        seekBar.value = 0;

        seekBar.style.setProperty(
            "--progress",
            "0%"
        );

        currentTime.textContent = "00:00";

        return;
    }

    const currentSecond =
        Math.floor(audio.currentTime);

    if (currentSecond === lastDisplayedSecond) {
        return;
    }

    lastDisplayedSecond = currentSecond;

    const progress =
        (currentSecond / duration) * 100;

    seekBar.value = progress;

    seekBar.style.setProperty(
        "--progress",
        `${progress}%`
    );

    currentTime.textContent =
        formatTime(currentSecond);
}

function startSeekAnimation() {
    cancelAnimationFrame(animationFrameId);

    const update = () => {
        if (!audio.paused && !audio.ended) {
            if (!isSeeking) {
                updateSeekUI();
            }

            animationFrameId = requestAnimationFrame(update);
        }
    };

    animationFrameId = requestAnimationFrame(update);
}

function stopSeekAnimation() {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
}

initializePlayer();
displayRecentlyPlayed();
displayPlaylists();