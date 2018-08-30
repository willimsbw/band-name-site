import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
Base = declarative_base()

class Words(Base):
    __tablename__ = "words"
    word = Column(String(80), nullable = False)

    @property
    def serialize(self):
        return {
            "word": self.word,
        }

#######   GOES AT END OF FILE   ###########
#this object engine is where it gets the name words.db from when creating the database
engine = create_engine('sqlite:///words.db')
Base.metadata.create_all(engine)
