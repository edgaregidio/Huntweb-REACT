import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadProduts();
  }

  loadProduts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page })
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProduts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProduts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(products => (
          <article key={products._id}>
            <strong>{products.title}</strong>
            <p>{products.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
        <div className="action">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
            </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proximo
            </button>
        </div>
      </div>
    )
  }
}