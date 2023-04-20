import styled from "styled-components";
import { Category, Company } from "../../utils/constants";

const Filters = () => {
  return (
    <Container>
      <form>
        <section className="search-view">
          <input type="text" placeholder="Search..." />
        </section>
        <section className="section-one">
          <div className="category-view">
            <h1>Category</h1>
            {Category.map((category: any) => (
              <button>{category.name}</button>
            ))}
          </div>
        </section>
        <section className="section-two">
          <div className="company-view">
            <h1>Company</h1>
            <select name="company" id="" value="All">
              {Company.map((company: any) => (
                <option key={company.id}> {company.name}</option>
              ))}
            </select>
          </div>
        </section>
        <section className="section-three">
          <div className="colors-view">
            <h1>Colors</h1>
          </div>
        </section>
        <section className="section-three">
          <div className="price-view">
            <h1>Price</h1>
            <input type="range" name="price" />
          </div>
        </section>
        <section className="section-three">
          <div className="shipping-view">
            <h1>Free Shipping</h1>
            <input type="checkbox" name="shipping" />
          </div>
        </section>
        <section className="button-view">
          <button>Clear Filters</button>
        </section>
      </form>
    </Container>
  );
};

export default Filters;

const Container = styled.section`
  .search-view {
    padding-left: 1rem;
    border: none;
    * {
      border: none;
      width: 20rem;
      padding: 0.5rem;
      /* border-left: 10px solid #d2b48c88; */
      border-left: 10px solid #d2b48c88;
    }
  }
  .category-view {
    padding-left: 1rem;
    text-align: left;
    margin-top: 1rem;
    display: grid;
    flex-direction: row;
    justify-content: start;
    ginawa ko lang yan kasi nga * {
      text-align: left;
    }

    & button {
      border: none;
      padding: 0.1rem 0.3rem;

      &:hover {
        background-color: #d2b48c88;
        cursor: pointer;
      }
    }
  }
  .company-view {
    padding-left: 1rem;
    margin-top: 1rem;
    select {
      width: 300px;
      padding: 0.3rem;
      border: none;
      border-left: 10px solid #d2b48c88;
    }
  }
  .colors-view {
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .price-view {
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .shipping-view {
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .button-view {
    padding-left: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    border: none;

    * {
      background-color: crimson;
      border: none;
      color: white;
      padding: 1rem 3rem;
      letter-spacing: 2px;

      &:hover {
        background-color: #78091f;
        cursor: pointer;
      }
    }
  }
`;
