
var config = {
    apiKey: "AIzaSyC8JOhVQud41B-yLTCNMYLStSOfvh_g6DM",
    authDomain: "dame-5-719fc.firebaseapp.com",
    databaseURL: "https://dame-5-719fc.firebaseio.com",
    projectId: "dame-5-719fc",
    storageBucket: "dame-5-719fc.appspot.com",
    messagingSenderId: "620329281209"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  
  //Constantes
  
  if(location.href.match(/(index.html)$/g)){

const loginGoogle = document.getElementById('login-google');

  //esto es lo que va a hacer en ele archivo de entrada
  loginGoogle.addEventListener('click', () => {
    
    const baseProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(baseProvider)
      .catch(e => console.log(e.message));
  });
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
     //que lo lleve a la pagina del menu
     alert('si funciono')
     location.replace('./user_account.html')
    var user = firebase.auth().currentUser;
    console.log(user);
    if(user != null){
    user.providerData.forEach(profile => {
    alert('Si fuciono');
      let foto = profile.photoURL;
      let name = profile.displayName;
      localStorage.setItem('foto',foto);
      localStorage.setItem('name', name);
      
    });
  }
    } else {
        alert('Bienvenido')
      //que lo deje en la pagina del logo 
    }
  })
}else if(location.href.match(/(account.html)$/g)){
  const logOut= document.getElementById('logout');
  const nameUser = document.getElementById('name-user');
  const imageUser = document.getElementById('image-user');
  const userLocal = localStorage.getItem('foto');
  const nameLocal = localStorage.getItem('name');

  imageUser.innerHTML = `<img class="user-img" src='${userLocal}'>`;
  nameUser.innerHTML = nameLocal;
  logOut.addEventListener('click', () => {
    firebase.auth().signOut();
    console.log("Usuario fuera");
    location.replace('./index.html')
  });
}else if(location.href.match(/(efectivo.html)$/g)){
  const userLocal = localStorage.getItem('foto');
  const photo = document.getElementById('photo');
  photo.innerHTML=`<img class="photo-user" src='${userLocal}'>`;
  const inputCash = document.getElementById('cash-code');
  const codeGenerator = document.getElementById('code-generator');
  const codigo = document.getElementById('codigo');
  codeGenerator.addEventListener('click', () => {
    const cash = inputCash.value;
    if(cash.length > 0){
      codigo.classList.remove('hide');
      inputCash.value='';
    }
  })
    
  
  
}else if (location.href.match(/(cuenta.html)$/g)){
  const userLocal = localStorage.getItem('foto');
  const photo = document.getElementById('imageUser');
  photo.innerHTML=`<img class="photo-user" src='${userLocal}'>`;
}else if (location.href.match(/(prestamos.html)$/g)){
  const userLocal = localStorage.getItem('foto');
  const photo = document.getElementById('imagen');
  photo.innerHTML=`<img class="photo-user" src='${userLocal}'>`;
}else if (location.href.match(/(pagos.html)$/g)){
  const userLocal = localStorage.getItem('foto');
  const photo = document.getElementById('fotografia');
  photo.innerHTML=`<img class="photo-user" src='${userLocal}'>`;
}

 