import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, Input, Alert, AlertIcon, AlertTitle} from '@chakra-ui/react'
import { error } from 'redux/selector';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(error)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
   <>
       {isError && <Alert status='error'>
      <AlertIcon className={css.error} />
          <AlertTitle>The data is entered incorrectly!</AlertTitle>
      </Alert>}
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <Input className={css.input} colorScheme="red"  type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input className={css.input} type="password" name="password" />
      </label>
      <Button colorScheme='teal' size='sm' type="submit">Log In</Button>
    </form>
   </>

  
  );
};
