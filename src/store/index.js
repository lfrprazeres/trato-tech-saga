import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';
import { categoriasListener } from './middlewares/categorias';
import { itensListener } from './middlewares/itens';
import createSagaMiddleware from 'redux-saga';
import { categoriasSaga } from './sagas/categorias';
import { carrinhoSaga } from './sagas/carrinho';
import usuarioSlice from './reducers/usuario';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
    usuario: usuarioSlice,
  },
  middleware:
    getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        categoriasListener.middleware,
        itensListener.middleware,
        sagaMiddleware
      ),
});

sagaMiddleware.run(categoriasSaga);
sagaMiddleware.run(carrinhoSaga);

export default store;