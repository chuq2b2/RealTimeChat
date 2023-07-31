
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'ebb2d7ce-139e-42c8-8e73-bab0ff9db9b7',
        props.user.username,
        props.user.secret
    );
    return ( 
        <div style = {{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {... chatProps} style ={{height: '100%'}}/>
        </div>
    )   
} 


export default ChatsPage 