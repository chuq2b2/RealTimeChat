import { PrettyChatWindow } from 'react-chat-engine-pretty';
const PrettyChatsPage = (props) => {
    return (
        <div style = {{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="ebb2d7ce-139e-42c8-8e73-bab0ff9db9b7"
                username={props.user.username}
                secret={props.user.secret}
            />   
        </div>
    )
}

export default PrettyChatsPage