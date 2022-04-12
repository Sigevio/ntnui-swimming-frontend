import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import BoardHeader from '../components/pages/board/BoardHeader';
import BoardMembers from '../components/pages/board/BoardMembers';

const Board: NextPage = () => {
  return (
    <Layout>
      <BoardHeader />
      <BoardMembers />
    </Layout>
  )
}

export default Board;
