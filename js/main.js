// Job Scout Website with Animated show hide buttons and text
// const getJob = document.getElementById('get-job');
// const slideBtns = document.querySelectorAll('.btn');
// const containers = document.querySelectorAll('.container');

// getJob.addEventListener('click', () => {
//     containers.forEach(function (container) {
//         container.style.display = 'grid';
//     });
//     getJob.style.display = 'none';
// });

// slideBtns.forEach((slideBtn) => {
//     slideBtn.addEventListener('click', (e) => {
//         const input = e.target.nextElementSibling;
//         slide(input);

//         function slide() {
//             if (input.classList.contains('slide-in')) {
//                 input.classList.remove('slide-in');
//                 input.classList.add('slide-out');
//                 setTimeout(function () {
//                     e.target.style.borderRadius = '50%';
//                     e.target.style.backroundColor = '#f18d38';
//                 }, 500);
//             } else {
//                 input.classList.remove('slide-out');
//                 setTimeout(function () {
//                     input.classList.add('slide-in');
//                 }, 200);
//                 e.target.style.borderRadius = '50% 0 0 50%';
//                 e.target.style.backroundColor = '#6e46ea';
//             }
//         }
//     });
// });


// Refactoring

document.getElementById('get-job').onclick = () => {
    document.querySelectorAll('.container').forEach((container) => {
        container.style.display = 'grid';
    });
    document.getElementById('get-job').style.display = 'none';
};

document.querySelectorAll('.btn').forEach((slideBtn) => {
    slideBtn.onclick = e => {
        const input = e.target.nextElementSibling;
        slide(input);

        function slide() {
            if (input.classList.contains('slide-in')) {
                input.classList.remove('slide-in');
                input.classList.add('slide-out');
                setTimeout(() => {
                    e.target.style.borderRadius = '50%';
                    e.target.style.backroundColor = '#f18d38';
                }, 500);
            } else {
                input.classList.remove('slide-out');
                setTimeout(() => {
                    input.classList.add('slide-in');
                }, 200);
                e.target.style.borderRadius = '50% 0 0 50%';
                e.target.style.backroundColor = '#6e46ea';
            }
        }
    }
});