from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker

from database_setup import Words, Base


def initiate_session():
    engine = create_engine('sqlite:///words.db')
    Base.metadata.bind = engine
    DBSession = sessionmaker(bind=engine)
    return DBSession()


def add_word(word_string):
    session = initiate_session()
    word_to_add = Words(word=word_string)
    session.add(word_to_add)
    session.commit()
    session.close()


def get_all_words():
    session = initiate_session()
    all_words = session.query(Words).order_by(Words.word.asc())
    session.close()
    return all_words


def get_random_word():
    session = initiate_session()
    word = session.query(Words).order_by(func.random()).first().word
    session.close()
    return word


def remove_word(input_id):
    session = initiate_session()
    word = session.query(Words).filter_by(id=input_id).first()
    session.delete(word)
    session.commit()
    session.close()
