import React from 'react'
import BigSearch from './BigSearch'
import CustomDropDown from './CustomDropDown'
import { qualityOptions, languageOptions, ratingOptions, genreOptions, yearOptions, sortOptions } from '../config/configData'

const MovieFilters = ({ filters, onFilterChange, search, onSearchChange }) => {
    return (
        <>
            <BigSearch value={search} onChange={onSearchChange} />
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <CustomDropDown options={genreOptions}    value={filters.genre}    onChange={(val) => onFilterChange('genre', val)} />
                <CustomDropDown options={qualityOptions}  value={filters.quality}  onChange={(val) => onFilterChange('quality', val)} />
                <CustomDropDown options={ratingOptions}   value={filters.rating}   onChange={(val) => onFilterChange('rating', val)} />
                <CustomDropDown options={yearOptions}     value={filters.year}     onChange={(val) => onFilterChange('year', val)} />
                <CustomDropDown options={languageOptions} value={filters.language} onChange={(val) => onFilterChange('language', val)} />
                <CustomDropDown options={sortOptions}     value={filters.sortBy}   onChange={(val) => onFilterChange('sortBy', val)} />
            </div>
        </>
    );
};

export default MovieFilters;