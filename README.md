```
EventBus.subscribe('useradded', function(user) {
  console.log(user)
});

form.onsubmit(function(e) {
  e.preventDefault();

  // do something with user fields

  EventBus.publish('useradded', user);
})
```
