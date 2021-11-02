from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker

from database_setup import Words, Base


def initiate_session():
    engine = create_engine('sqlite:///words.db')
    Base.metadata.bind = engine
    DBSession = sessionmaker(bind=engine)
    return DBSession()


def add_word(word_string, first=True, second=True):
    session = initiate_session()
    word_to_add = Words(word=word_string, first=first, second=second)
    success=True
    try:
        session.add(word_to_add)
        session.commit()
    except Exception as e:
        print(str(e))
        session.rollback()
        session.flush() 
        success=False
    finally:
        dict = {"id": word_to_add.id, "success": success}
        session.close()
        return dict


def get_all_words():
    session = initiate_session()
    all_words = session.query(Words).order_by(Words.word.asc())
    session.close()
    return all_words


def get_random_word(is_first):
    session = initiate_session()
    if is_first:
        word = session.query(Words).where(Words.first==True).order_by(func.random()).first().word
    else:
        word = session.query(Words).where(Words.second==True).order_by(func.random()).first().word
    session.close()
    return word


def remove_word(input_id):
    session = initiate_session()
    word = session.query(Words).filter_by(id=input_id).first()
    success=True
    try:
        session.delete(word)
        session.commit()
    except Exception as e:
        print(str(e))
        session.rollback()
        session.flush() 
        success=False
    finally:
        session.close()
        return success


def update_word(word_map):
    session = initiate_session()
    success=True
    try:
        session.query(Words).where(Words.id == word_map.get("id")).update({
            Words.word: word_map.get("word"),
            Words.first: word_map.get("first"),
            Words.second: word_map.get("second")
        })
        session.commit()
    except Exception as e:
        print(str(e))
        session.rollback()
        session.flush()
        success=False
    finally:
        session.close()
        return success