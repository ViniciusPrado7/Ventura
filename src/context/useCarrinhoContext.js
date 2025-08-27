import { useContext } from "react";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducer/carrinhoReducer";
import { CarrinhoContext } from "./CarrinhoContext";


const addProdutoAction = (novoProduto) => ({
    type: ADD_PRODUTO,
    payload: novoProduto
})

const removerProdutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId
})

const updateQuantidadeAction = (produtoId, quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade }
})

export const useCarrinhoContext = () => {
    const { carrinho, dispatch, quantidade, valorTotal } = useContext(CarrinhoContext)

    function adicionarProduto(novoProduto) {
        dispatch(addProdutoAction(novoProduto))
    }

    function removerProduto(id) {
        const produto = carrinho.find((item) => item.id === id);

        if (produto && produto.quantidade > 1) {
            dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
        } else {
            dispatch(removerProdutoAction(id));
        }
    }

    function removerProdutoCarrinho(id) {
        dispatch(removerProdutoAction(id));
    }

    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoAction,
        removerProdutoCarrinho,
        valorTotal,
        quantidade
    }
}
