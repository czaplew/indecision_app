class IndecisionApp extends React.Component{
  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return(
      <div>
        <Header title="{title}" subtitle="{subtitle}"></Header>
        <Action></Action>
        <Options></Options>
        <AddOption></AddOption>
      </div>
    );
  }
}

class Header extends React.Component {
  // constructor(){}

  render() {
      // console.log(this.props.title);
    return     (<div><h1>{this.props.title}</h1>
        <h1>{this.props.subtitle}</h1></div>);
  }
}

class Action extends  React.Component {
  render(){
    return (<div><button>What should I do</button></div>);
  }
}

class Options extends  React.Component {
  render(){
    return (<div>
      <h1>Options</h1>
      <Option/>
    </div>);
  }
}

class Option extends React.Component {
  render(){
    return (<div>Option</div>);
  }
}

class AddOption extends  React.Component {
  render(){
    return (<div>AddOption</div>);
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// // const emailjs = require("emailjs");
//
// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of computer',
//   options: ['One', 'Two'],
//   decision:0
// };
// function sendMail(e)
// {
//   e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json",
//     data: {
//       'key': 'NiDEYZJfdOPa2CdsOb-TOw',
//       'message': {
//         'from_email': 'punczoll@o2.pl',
//         'to': [
//             {
//               'email': 'kczaplew0@gmail.com',
//               'name': 'RECIPIENT NAME (OPTIONAL)',
//               'type': 'to'
//             }
//           ],
//         'autotext': 'true',
//         'subject': 'YOUR SUBJECT HERE!',
//         'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//       }
//     }
//    }).done(function(response) {
//      console.log(response); // if you're into that sorta thing
//    });
// };
//
// function getLocation(location) {
//   return location
//     ? location
//     : "";
// };
//
// const addToList = (e) => {
//   e.preventDefault();
//   // rerender();
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//   }
//
//   rerender();
// };
//
// const onRemoveAll = (e) => {
//   app.options = [];
//   rerender();
// };
//
// const onMakeDecision = ()=>{
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   app.decision = randomNum;
//   rerender();
//   console.log(randomNum);
// };
// // Works but map is more pretty :)
// // const items = () => {
// //   let alist =[];
// //   app.options.forEach((oObj,index) =>{
// //   alist.push( <li key={index}>{oObj}</li>);
// //   // return <li>{oObj}</li>;
// //   });
// //
// //   // rerender();
// //    return alist;
// // };
//
// const buttons = {
//   visibility:true
// };
// const rerender = () => {
//   const templateTwo = <div className="container">
//     <h1>Indecision App</h1>
//     <div>Put your life in the hands of a computer</div>
//     <ul>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Poniedziałek, 19:00 </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Wtorek, 19:00 </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Sobota, wieczorem</button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Niedziela, do uzg. </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Nie mam zdania (czyt. chyba oszalałeś, nigdzie z Tobą nie pójdę) </button>
//       <button visibility={buttons.visibility} onClick={onRemoveAll}> Losuj </button>
//     </ul>
//
//     <div>Twój wybór to : {buttons.choice}</div>
//     <form onSubmit={sendMail}>
//       <input type="text" name="option"></input>
//       <button>Wyślij odpowiedź</button>
//     </form>
//   </div>;
//   //
//   ReactDOM.render(templateTwo, document.getElementById("app"));
// };
//
// rerender();
//
// // ReactDOM.render(templateTwo, document.getElementById("app"));
