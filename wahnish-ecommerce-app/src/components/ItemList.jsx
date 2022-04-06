import '../App.css';
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

    const thePath = useParams()

    useEffect(() => {
        setPageNumber(0);
      }, [thePath]);
    

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
        <div className="joker">
            <p>.</p>
        </div>
        <ReactPaginate
            initialPage={0}
            breakLabel="..."
            disableInitialCallback={false}
            selectedPageRel={null}
            renderOnZeroPageCount={null}
            previousLabel={"< Previous"}
            nextLabel={"Next >"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
        <div className="joker">
            <p>.</p>
        </div>
        {displayItems}
    </>);
}

export default memo(ItemList);
