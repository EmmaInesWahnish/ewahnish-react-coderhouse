import '../App.css';
import { memo } from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import Item from './Item.jsx';
const ItemList = ({ item }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const itemsPerPage = 3;
    const pagesVisited = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(item.length / itemsPerPage)

    const displayItems =
        item.slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((element) => {
                return (<div className="flex-container-card py-10" key={element.id}>
                    <div className="flex-container-card">
                        {<Item element={element} />}
                    </div>
                </div >)
            })

    return (<>
        {displayItems}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    </>);
}

export default memo(ItemList);
