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
