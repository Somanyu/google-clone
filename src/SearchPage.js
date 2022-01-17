import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); //* LIVE API CALL

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link>
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>

                <div className="searchPage_header">
                    <Search hideButtons/>
                </div>
            </div>
            <div className="searchPage_results">
                
            </div>
        </div>
    )
}

export default SearchPage;

//* https://developers.google.com/custom-search/v1/using_rest
//* https://cse.google.com/cse/create/new 
//* Search engine ID -  248c74e8f32e5cfbe  