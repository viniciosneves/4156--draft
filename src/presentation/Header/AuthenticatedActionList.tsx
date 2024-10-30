import { toast } from "react-toastify"
import { useAuthContext } from "../../app/hooks/useAuthContext"
import { List, ListItem } from "./styles"
import { useNavigate } from "react-router"
import { IconAvatar } from "../../components/Icons"
import { TransparentButton } from "../../components/TransparentButton"

export const AuthenticatedActionList = () => {

    const { logout } = useAuthContext()
    const navigate = useNavigate()

    const onAskForLogout = async () => {
        console.log('logout')
        await logout()
        toast.success('Deslogado com sucesso!')
        navigate('/auth/login')
    }

    return (<List>
        <ListItem>
            Boas vindas!
        </ListItem>
        <ListItem>
            <IconAvatar />
        </ListItem>
        <ListItem>
            <TransparentButton onClick={onAskForLogout}>
                Logout
            </TransparentButton>
        </ListItem>
    </List>)
}