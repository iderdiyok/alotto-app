import gql from 'graphql-tag';

export const FETCH_DEADLINES = gql`query fetchDeadlines {
  deadlines{
    deadlines {
      deadline
      jackpot
      type
    }
  }
}`;

export const FETCH_DRAWS = gql`query fetchDraws($lottery: String!, $limit: Int!) {
  draw(type: $lottery, limit: $limit) {
    draws {
      date
      numbers
      additionalNumbers
      jackpot
    }
  }
}`;
