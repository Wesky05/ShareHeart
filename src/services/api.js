import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = process.env.EXPO_PUBLIC_API_URL;;

export const getUserDetails = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    throw new Error('Token não encontrado');
  }

  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateUserName = async (userId, newUserName) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    throw new Error('Token não encontrado');
  }

  try {
    console.log('Enviando solicitação para:', `${API_URL}/donor/update/${userId}`);
    console.log('Novo nome:', newUserName);
    console.log('Token:', token);
    console.log('User ID:', userId); // Verificação do ID do usuário

    const response = await axios.put(`${API_URL}/donor/update/${userId}`, { name: newUserName }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Resposta da API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o nome do usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteUserAccount = async (userId) => {
  try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.delete(`${API_URL}/donor/delete/${userId}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      console.error('Erro ao excluir conta do usuário:', error.response ? error.response.data : error.message);
      throw error;
  }
};