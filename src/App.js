import './App.css';
import chatGptLogo from './assets/ChatGptPaste.png'
import addButton from './assets/add-30.png'
import messageIcon from './assets/message.svg'
import homeIcon from './assets/home.svg'
import rocketIcon from './assets/rocket.svg'
import UserImage from './assets/user-icon.png'
import SendImage from './assets/send.svg'
import ChatGPTIcon from './assets/gptImage.jpg'


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
          <div className='listItems'><img src={rocketIcon} alt='Upgrade Plan' className='listItemsImage'/>Upgrade Plan</div>
          <div className='listItems'><img src={UserImage} alt='User' className='userImage'/>Mahin</div>
        </div>
      </div>
      <div className="main">
        <div className='chats'>
          <div className='chatQues'>
            <img src={UserImage} alt='User' className='userImage'/><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='chatAns'>
            <img src={ChatGPTIcon} alt='User' className='gptImage'/><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='textInput'>
            <input type='text' placeholder='Message ChatGPT...'/><button className='send' type='submit' ><img src={SendImage} alt='Send' className='sendBtnImage'/></button>
          </div>
          <p>ChatGPT can make mistakes. Consider checking important</p>
        </div>    
      </div>
    </div>
  );
}

export default App;
