import instance from 'common/config/api';

const cartoesService = {
  buscarPorIdUsuario: async (usuarioId) => {
    const resposta = await instance.get(`/cartoes?usuarioId=${usuarioId}`);

    return resposta.data;
  }
}

export default cartoesService;