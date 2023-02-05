import { useState } from 'react';
import { toast } from 'flowbite-react';

import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);

      toast.success('success login');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return;
}
