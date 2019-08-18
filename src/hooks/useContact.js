import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const url = 'https://simple-contact-crud.herokuapp.com/contact';

export const defaultForm = {
  id: null,
  firstName: '',
  lastName: '',
  age: 0,
  photo: 'N/A',
};

const useContact = () => {
  const [contactList, setContactList] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (msg = '') => {
    setMessage(msg);

    // remove message after timeout
    window.setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setContactList(response.data.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        sendMessage(error.response.data.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [fetch]);

  const submitContact = useCallback(async contactForm => {
    try {
      let submitUrl = url;
      let method = 'POST';

      const data = {
        ...contactForm,
      };

      // if data id is not null it means updating existing contact
      if (data.id !== null) {
        submitUrl = `${url}/${contactForm.id}`;
        method = 'PUT';
      }

      delete data.id;

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
    setForm(defaultForm);

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
    isLoading,
    message,
  };
};

export default useContact;
