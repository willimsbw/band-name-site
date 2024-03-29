from sqlalchemy import Column, Integer, String
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.expression import null
from sqlalchemy.sql.sqltypes import Boolean

Base = declarative_base()

class Words(Base):
    __tablename__ = "words"
    word = Column(String(80), nullable = False)
    first = Column(Boolean, nullable=False, default=True)
    second = Column(Boolean, nullable=False, default=True)
    id = Column(Integer, primary_key = True)


    @property
    def serialize(self):
        return {
            "word": self.word,
            "id": self.id,
            "first": self.first,
            "second": self.second
        }

#######   GOES AT END OF FILE   ###########
#this object engine is where it gets the name words.db from when creating the database
engine = create_engine('sqlite:///words.db')
Base.metadata.create_all(engine)
