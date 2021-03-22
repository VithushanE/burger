document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }


    // Creating a burger 

// const createBurger = document.getElementById('create-form'); 


// const newBurger = document.getElementById('ca').value



    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn ) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('ca').value.trim(),
            }

            fetch(`/api/burger/create`, {
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

    // if (changeDevourBtn) {
        changeDevourBtn.forEach((button) => {
            button.addEventListener('click', updatedDevoured) 
        })

        function updatedDevoured(event){
            console.log(event.target.dataset.id)
        }
        let updateBurger = {
            id = event.target.dataset.id
        }
        fetch("/api/update", {
            method: "PUT", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify(updateBurger)
        }).then(data => {
            location.reload
        })
      
    
        //         (e) => {
        //         const id = e.target.getAttribute('data-id');
        //         const newBurger = e.target.getAttribute('data-newburger')

        //         const newBurgerState = {
        //             is_devoured = newBurger,
        //         };

        //         fetch(`/api/burger/${id}`, {
        //             method: "PUT",
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-type': 'application/json',
        //             },
        //             body: JSON.stringify(newBurgerState),
        //         }).then((response) => {
        //             if (response.ok) {
        //                 console.log(`changed burger to ${newBurger}`);
        //                 location.reload('/');
        //             } else {
        //                 alert('something went wrong!')
        //             }
        //         })

        //     })
        // })
    // }

    // changeDevourBtn.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //         const id = e.target.getAttribute('data-id');
    //         const newBurger = e.target.getAttribute('data-newburger')

    //         const newBurgerState = {
    //             is_devoured = newBurger,
    //         };

    //         fetch(`/api/burger/update`, {
    //             method: "PUT",
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-type': 'application/json',
    //             },
    //             body: JSON.stringify(newBurgerState),
    //         }).then((response) => {
    //             if (response.ok) {
    //                 console.log(`changed burger to ${newBurger}`);
    //                 location.reload('/');
    //             } else {
    //                 alert('something went wrong!')
    //             }
    //         })

    //     })
    // })




    // Deleting a burger

    // const deleteBurgerBtn = document.querySelectorAll('.delete-burger');

    // deleteBurgerBtn.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //         const id = e.target.getAttribute('data-id');

    //         fetch(`api/burger/delete/${id}`, {
    //             method: 'DELETE',
    //         }).then((res) => {
    //             console.log(res);
    //             console.log(`Deleted burger: ${id}`);

    //             location.reload();
    //         })
    //     })
    // })


    const deleteBurgerBtn = document.querySelectorAll('.delete-form');

    deleteBurgerBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');

            fetch(`api/burger/delete/${id}`, {
                method: 'DELETE',
                // headers: {
                //     Accept: 'application/json', 
                //     'content-type': 'application/json',
                // }, 

                // body: JSON.stringify(id),

            }).then((res) => {
                console.log(res);
                // document.getElementById('dl').value= '';

                console.log(`Deleted burger: ${id}`);

                location.reload();
            })
        })
    })


})


