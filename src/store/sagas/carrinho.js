import { call, takeLatest } from 'redux-saga/effects';
import bandeirasService from 'services/bandeiras';
import cartoesService from 'services/cartoes';
import usuariosService from 'services/usuarios';
import { carregarPagamento } from 'store/reducers/carrinho';

const usuarioLogado = 1;

function* carregarPagamentoSaga() {
  try {
    const usuario = yield call(usuariosService.buscarPorId, usuarioLogado);
    const cartoes = yield call(cartoesService.buscarPorIdUsuario, usuarioLogado);
    const bandeiraIds = cartoes.map(cartao => cartao.bandeiraId);
    const bandeiras = yield call(bandeirasService.buscarPorId, bandeiraIds);
    const cartoesComBandeiras = cartoes.map(cartao => {
      const bandeiraDoCartao = bandeiras.find(bandeira => bandeira.id === cartao.bandeiraId);
      return { ...cartao, taxa: bandeiraDoCartao.taxa, bandeira: bandeiraDoCartao.nome };
    });
    console.log({ ...usuario, cartoes: cartoesComBandeiras });
  } catch(e) {}
}

export function* carrinhoSaga() {
  yield takeLatest(carregarPagamento, carregarPagamentoSaga);
}