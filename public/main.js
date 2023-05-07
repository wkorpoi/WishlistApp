const buttons = document.getElementsByClassName("delete");

Array.from(buttons).forEach(function(element) {
      element.addEventListener('click', function(e){
        const _id = e.target.value
        console.log('working',_id)
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
