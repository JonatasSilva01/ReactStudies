import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import { loadPosts } from "../utils/loadPost";
import { Posts } from "../components/Posts";
import { Button } from "../components/Button";
import { TextSearch } from "../components/InputSearch";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPages] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPages >= allPosts.length;

  // verifica se tem posts, se sim ele retorna pelo nome filtrado se não retorna nada
  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;
    
  // Carrega os posts e fotos da API
  const hendleLoadPosts = useCallback(async (page, postsPerPages) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPages))
    setAllPosts(postsAndPhotos);
  }, []);

  // carregando os posts

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-br'))
    hendleLoadPosts(0, postsPerPages);
  }, [hendleLoadPosts, postsPerPages])

  // carrega mais posts quando precionado o botão.
  const hendleLoadMorePosts = () => {
    const nextPages = page + postsPerPages;
    const nextPosts = allPosts.slice(nextPages, nextPages + postsPerPages)
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPages);
  };

  // pega o valor dentro do Input
  const hendleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value)
  };

  return (
    <>
      <section className="container">
        <div className="search-container">
          {
            // verifica se tem algo escrito porque ele aparece se não ele se esconde
            !!searchValue && <h1>🔍</h1>
          }
          <TextSearch searchValue={searchValue} handleChange={hendleSearch} />
        </div>

        {
          // verifica se numero de posts é maior do que 0 se não retorna nada!
          filteredPosts.length > 0 && (
            <Posts className="posts-backgorund" posts={filteredPosts} />
          )
        }

        {
          // se não tem posts ele retorna uma menssagem que não tem posts
          filteredPosts.length === 0 && <h2>Não existem Posts 😢</h2>
        }
        {
          // se ta pesquisando com então o botão some se não ele continua ali a para ser usado
          !searchValue && (
            <Button
              text="carregando mais posts"
              disabled={noMorePosts}
              onClick={hendleLoadMorePosts}
            />
          )
        }
      </section>
    </>
  );
};

export default Home;
