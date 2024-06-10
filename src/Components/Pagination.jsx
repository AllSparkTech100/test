// // src/PaginationComponent.js
// import { Pagination } from 'react-bootstrap';

// function Paginator ({ totalItems, itemsPerPage, currentPage, onPageChange }) {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     onPageChange(pageNumber);
//   };

//   const renderPaginationItems = () => {
//     let items = [];
//     for (let number = 1; number <= totalPages; number++) {
//       items.push(
//         <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
//           {number}
//         </Pagination.Item>
//       );
//     }
//     return items;
//   };

//   return (
//     <Pagination>
//       <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
//       {renderPaginationItems()}
//       <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
//     </Pagination>
//   );
// };

// export default Paginator;
