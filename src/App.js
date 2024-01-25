import './App.css';
import chatGptLogo from './assets/ChatGptPaste.png'
import addButton from './assets/add-30.png'
import messageIcon from './assets/message.svg'
import homeIcon from './assets/home.svg'
import rocketIcon from './assets/rocket.svg'
import UserImage from './assets/user-icon.png'


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="uperSideTop"><img src={chatGptLogo} alt='Logo' className='logo'/><span className='brand'>ChatGpt</span></div>
          <button className='upButton'><img　src={addButton} alt='New Chat' className='addBttnImage'/>New Chat</button>
          <div className="uperSideBottom">
            <button className='query'><img　src={messageIcon} alt='Query' className='queryImage'/>What is ChatGpt OpenAi</button>
            <button className='query'><img　src={messageIcon} alt='Query' className='queryImage'/>How to Use API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className='listItems'><img src={homeIcon} alt='Home' className='listItemsImage'/>Home</div>
          <div className='listItems'><img src={rocketIcon} alt='Upgrade' className='listItemsImage1'/>Upgrade</div>
          <div className='listItems'><img src={UserImage} alt='User' className='listItemsImage'/>Mahin</div>
        </div>
      </div>
      <div className="main">
      
      </div>
    </div>
  );
}

export default App;
