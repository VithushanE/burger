document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }


    // Creating a burger 

    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('ca').value.trim(),
            }

            fetch(`/api/burger`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('ca').value = '';

                console.log('Created new Burger!')
                location.reload();
            })

        })
    }

    // Updating the burger

    const changeDevourBtn = document.querySelectorAll('.change-burger')

    if (changeSleepBtns) {
        changeSleepBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newBurger = e.target.getAttribute('data-newburger')

                const newBurgerState = {
                    is_devoured = newBurger,
                };

                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(newBurgerState),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`changed burger to ${newBurger}`);
                        location.reload('/');
                    } else {
                        alert('something went wrong!')
                    }
                })

            })
        })
    }


    // Deleting a burger

    const deleteBurgerBtn = document.querySelectorAll('.delete-burger');

    deleteBurgerBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');

            fetch(`/api/burgers/${id}`, {
                method: 'DELETE',
            }).then((res) => {
                console.log(res);
                console.log(`Deleted burger: ${id}`);

                location.reload();
            })
        })
    })
})


