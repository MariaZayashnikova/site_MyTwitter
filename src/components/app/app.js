import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import StatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
    color: ${props => props.colored ? 'red' : 'black'}
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Я изучаю React', important: false, like: false, id: 1 },
                { label: 'This is interesting', important: false, like: false, id: 2 },
                { label: 'Но сложно...', important: false, like: false, id: 3 }
            ],
            textSearch: '',
            filter: 'all'
        }
        this.idMax = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.updateSearchItem = this.updateSearchItem.bind(this);
        this.updateFiler = this.updateFiler.bind(this);
    }

    searchItem(items, textSearch) {
        if (textSearch.length === 0) return items;

        return items.filter(elem => {
            return elem.label.indexOf(textSearch) > -1;
        });
    }

    updateSearchItem(text) {
        this.setState({ textSearch: text })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(elem => elem.like);
        } else {
            return items
        }
    }

    updateFiler(newFilter) {
        this.setState({ filter: newFilter });
    }


    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(text) {
        this.setState(({ data }) => {
            let newItem = {
                label: text,
                important: false,
                id: this.idMax++
            }

            let newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            let newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    render() {
        const { data, textSearch, filter } = this.state;
        let liked = data.filter(elem => elem.like).length;
        let allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchItem(data, textSearch), filter);

        return (
            <AppBlock>
                <Header
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel textSearch={this.updateSearchItem} />
                    <StatusFilter
                        filter={filter}
                        updateFiler={this.updateFiler} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={id => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike} />
                <PostAddForm addItem={this.addItem} />
            </AppBlock>
        )
    }
}