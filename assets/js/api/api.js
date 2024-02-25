// api.js
import { fetchData, putData, deleteData, postData } from "./getData.js";

const baseUrl = "http://localhost:3000";
function fetchProducts() {
  return fetchData(`${baseUrl}/products`);
}

function fetchCategories() {
  return fetchData(`${baseUrl}/categories`);
}
function fetchOrders() {
  return fetchData(`${baseUrl}/orders`);
}

function fetchProductsByCategory(categoryId) {
  return fetchData(`${baseUrl}/products?categoryId=${categoryId}`);
}

function getProductDetails(productId) {
  return fetchData(`${baseUrl}/products/${productId}`);
}
function updateProduct(productId, productData) {
  return putData(`${baseUrl}/products/${productId}`, productData);
}

function deleteProduct(productId) {
  return deleteData(`${baseUrl}/products/${productId}`);
}
async function addCategory(categoryData) {
  const categories = await fetchCategories();
  const highestId = categories.reduce(
    (maxId, category) => Math.max(maxId, parseInt(category.id) || 0),
    0
  );
  categoryData.id = (highestId + 1).toString();
  return postData(`${baseUrl}/categories`, categoryData);
}
async function getCategoryDetails(categoryId) {
  return fetchData(`${baseUrl}/categories/${categoryId}`);
}
function updateCategory(categoryId, categoryData) {
  return putData(`${baseUrl}/categories/${categoryId}`, categoryData);
}
function deleteCategory(categoryId) {
  return deleteData(`${baseUrl}/categories/${categoryId}`);
}

async function addOrder(orderData) {
  return postData(`${baseUrl}/orders`, orderData);
}
function fetchOrderDetails(orderId) {
  return fetchData(`${baseUrl}/orders/${orderId}`);
}

function updateOrder(orderId, orderData) {
  return putData(`${baseUrl}/orders/${orderId}`, orderData);
}
function deleteOrder(orderId) {
  return deleteData(`${baseUrl}/orders/${orderId}`);
}
export {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
  getProductDetails,
  updateProduct,
  deleteProduct,
  addCategory,
  getCategoryDetails,
  updateCategory,
  deleteCategory,
  addOrder,
  fetchOrders,
  fetchOrderDetails,
  updateOrder,
  deleteOrder
};
