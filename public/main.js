var trash = document.getElementsByClassName("delete");

Array.from(trash).forEach(function(element) {
  console.log('working')
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
