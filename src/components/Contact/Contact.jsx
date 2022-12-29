import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactc/operations";
import Example from "components/loading/loading";
import { filterSelector, isLoadingSelector, newContactSelector } from "redux/selector";
import css from './Contact.module.css';
import { Button, Link } from '@chakra-ui/react';

export const Contact = () => {
    
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingSelector)
    const filter = useSelector(filterSelector)
    const contacts = useSelector(newContactSelector)
    
    return (
        <div className={css.conteinet}>
          {isLoading &&  <Example type={'balls'} color={'red'}/>}
             {filter === '' && (
            <ul>
                {contacts.map(({ name, id, number }) => ( 
                    <li key={id}>
                        <div>
                        {name}: <Link color='teal.500' href={"tel:" + number}>{number}</Link>
                        </div>
                        <Button colorScheme='red' size='sm' type='button' onClick={() => dispatch(deleteContact(id))}>dalet</Button>
                    </li>
                ))}
            </ul>
            )}      
        </div>
    )
};