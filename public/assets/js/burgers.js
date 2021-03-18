// document.addEventListener('DOMContentLoaded', (event) => {
//     if (event) {
//         console.info('DOM loaded');
//     }

// const { delete } = require("../../../controllers/burgers_controller")

    // UPDATE  
    // const changeToDevoured = document.querySelectorAll('.change-burger')

    // if(changeToDevoured){
    //     changeToDevoured.forEach((button) => {
    //         button.addEventListener('click,' (e) => { 
    //             const id = e.target.getAttribute('id'); 


    //             fetch(`api/burgers/${id}`, {
    //                 method: 'PUT', 
    //                 headers: {
    //                     'application/json',
    //         'Content-Type': 'application/json',
    //             },
           
    //         });
    //     })
    // }


    // DELETE 
    // function deleteBurger(id){
    //     fetch(`api/burgers/${id}`, {
    //         method: 'DELETE',
    //     }).then((res) => {
    //         console.log(res);
    //         console.log(`Deleted Burger: ${id}`);
    //       }
        
    // const updateBurgerBtns = document.querySelectorAll('.change-burger');

    // updateBurgerBtns.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //         const id = e.target.getAttribute('data-id');

    //         // Send the delete request 
    //         fetch(`api/burgers/${id}`, {
    //             method: 'PUT',
    //         }).then((res) => {
    //             console.log(res);
    //             console.log(`Devoured Burger: ${id}`);

    //             // Reload the page 
    //             location.reload();
    //         });
    //     });
    // });


// DELETE BUTTON 

// function deleteBurger() {
// var deleteBtn = document.querySelectorAll('delete-burger')

// deleteBtn.addClassList('display-none')


// }
