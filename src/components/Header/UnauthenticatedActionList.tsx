import { List, ListItem } from "./styles"
import { Button } from "../Button"

export const UnauthenticatedActionList = () => {
    return (<List>
        <ListItem>
            <Button link to="/auth/register">
                Abrir conta
            </Button>
        </ListItem>
        <ListItem>
            <Button outline link to="/auth/login">
                Login
            </Button>
        </ListItem>
    </List>)
}