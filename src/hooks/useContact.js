import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const url = 'https://simple-contact-crud.herokuapp.com/contact';

export const defaultForm = {
  id: null,
  firstName: '',
  lastName: '',
  age: 0,
  photo:
    'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
};

const useContact = () => {
  const [contactList, setContactList] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);

      setContactList(response.data.data);
    };

    fetchData();
  }, [fetch]);

  const sendMessage = (msg = '') => {
    setMessage(msg);

    window.setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  const submitContact = useCallback(async contactForm => {
    try {
      let submitUrl = url;
      let method = 'POST';

      const data = {
        ...contactForm,
      };

      if (data.id === null) {
        delete data.id;
      } else {
        submitUrl = `${url}/${data.id}`;
        method = 'PUT';
      }

      const response = await axios({
        method,
        url: submitUrl,
        data,
      });

      setFetch(true);
      sendMessage(response.data.message);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      sendMessage(error.response.data.message);
    }
  }, []);

  const viewContact = useCallback(async contactId => {
    try {
      const response = await axios.get(`${url}/${contactId}`);

      setForm(response.data.data);
    } catch (error) {
      setForm(defaultForm);
      setIsError(true);
      sendMessage(error.response.data.message);
    }
  }, []);

  const deleteContact = useCallback(async contactId => {
    try {
      const response = await axios.delete(`${url}/${contactId}`);

      setFetch(true);
      sendMessage(response.data.message);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      sendMessage(error.response.data.message);
    }
  }, []);

  return {
    contactList,
    setContactList,
    form,
    setForm,
    submitContact,
    deleteContact,
    viewContact,
    isError,
    message,
  };
};

export default useContact;
