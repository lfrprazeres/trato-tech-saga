import instance from 'common/config/api';

const bandeirasService = {
  buscarPorId: async bandeiraIds => {
    const query = new URLSearchParams();
    bandeiraIds.forEach(id => query.append('id', id));
    const resposta = await instance.get(`/bandeiras?${query.toString()}`);

    return resposta.data;
  }
}

export default bandeirasService;