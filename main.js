var config = {
    apiKey: "AIzaSyC8JOhVQud41B-yLTCNMYLStSOfvh_g6DM",
    authDomain: "dame-5-719fc.firebaseapp.com",
    databaseURL: "https://dame-5-719fc.firebaseio.com",
    projectId: "dame-5-719fc",
    storageBucket: "dame-5-719fc.appspot.com",
    messagingSenderId: "620329281209"
  };
  firebase.initializeApp(config);

  //Constantes


  //esto es lo que va a hacer en ele archivo de entrada
  logoGoogle.addEventListener('click', () => {
    const baseProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(baseProvider)
      .catch(e => console.log(e.message));
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
     //que lo lleve a la pagina del menu
    } else {
      //que lo deje en la pagina del logo 
    }
  })