import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Alert, AlertIcon, AlertTitle, Button, Input} from '@chakra-ui/react'
import { error } from 'redux/selector';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(error)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        Username
        <Input  type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <Input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input type="password" name="password" />
      </label>
      <Button className={css.btn} colorScheme='teal' size='sm' type="submit">Register</Button>
    </form>
    </>
  );
};
