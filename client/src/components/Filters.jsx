import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    
    width: 99vw;
    background-color: #acceeb;
    height: 70px;
    border-radius: 5px;
    margin: -3px 5px;
    align-items: center;
    justify-content: center;
`;
const FilterContainer = styled.div`
    display: flex;
    padding: 0px 50px;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    align-items: center;
    justify-content: center;
`;
const FilterText = styled.span`
   font-size: 18px;
   font-weight: 400;
   margin-right: 10px;
   
`;
const Select = styled.select`
    color: skyblue;
    padding:  5px 7px;
    margin: 0px 5px;
    border: 0.5px solid teal;
    border-radius: 5px;
    height: 30px;
    outline: none;
`;
const Option = styled.option`
    color: skyblue;
    font-size: 14px;
    padding: 10px;
    
    
`;
const SearchContainer = styled.div`
    display: flex;
    height: 30px;
`;
const Search = styled.input`
    border-radius: 3px;
    border: none;
    outline: none;
    font-size: 14px;
`;
const SearchButton = styled.button`
    margin-left: 10px;
    background-color: #094683;
    color: white;
    font-weight: 400;
    font-size: 14px;
    border-radius: 4px;
    border: none;
`;
const Filters = () => {
  
    const [filters,setFilters]  = useState({});
    const [sort,setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
        [e.target.name] : value,
        });
    };

  return (
    <Container>
        <FilterContainer>
        <Filter>
        <SearchContainer>
             <FilterText>Title</FilterText>
            <Search/>
            <SearchButton>Search</SearchButton>
        </SearchContainer>
        </Filter>
            <Filter>
                <FilterText>Filter Publications</FilterText>
                <Select name="type" onChange={handleFilters}>
                    <Option disabled >Type</Option>
                    <Option value="monographs" >Monographs</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Publications</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest" >Latest</Option>
                    <Option value="asc">Price (Low to High)</Option>
                    <Option value="desc">Price (High to Low)</Option>
                    
                </Select>
                </Filter>
        </FilterContainer>
    </Container>
  )
}

export default Filters