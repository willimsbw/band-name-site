from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from database_setup import Words, Base

engine = create_engine('sqlite:///words.db')
# Bind the engine to the metadata of the Base class so that the
# declaratives can be accessed through a DBSession instance
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
# A DBSession() instance establishes all conversations with the database
# and represents a "staging zone" for all the objects loaded into the
# database session object. Any change made against the objects in the
# session won't be persisted into the database until you call
# session.commit(). If you're not happy about the changes, you can
# revert all of them back to the last commit by calling
# session.rollback()
session = DBSession()



print("Adding words!")

session.add(Words(word="Fox", first=True, second=True))
session.add(Words(word="Gorge", first=True, second=True))
session.add(Words(word="Platypus", first=True, second=True))
session.add(Words(word="Deer", first=True, second=True))
session.add(Words(word="Lake", first=True, second=True))
session.add(Words(word="Dog", first=True, second=True))
session.add(Words(word="Archipelago", first=True, second=True))
session.add(Words(word="Cat", first=True, second=True))
session.add(Words(word="Pond", first=True, second=True))
session.add(Words(word="Canyon", first=True, second=True))
session.add(Words(word="Mountain", first=True, second=True))
session.add(Words(word="Man", first=True, second=True))
session.add(Words(word="Sloth", first=True, second=True))
session.add(Words(word="Llama", first=True, second=True))
session.add(Words(word="Ocean", first=True, second=True))
session.add(Words(word="Lion", first=True, second=True))
session.add(Words(word="Island", first=True, second=True))
session.add(Words(word="Genius", first=True, second=True))
session.add(Words(word="Lover", first=True, second=True))
session.add(Words(word="Patch", first=True, second=True))
session.add(Words(word="Alpaca", first=True, second=True))
session.add(Words(word="Run", first=True, second=True))
session.add(Words(word="Test", first=True, second=True))
session.add(Words(word="Hunter", first=True, second=True))
session.add(Words(word="Forest", first=True, second=True))
session.add(Words(word="Pine", first=True, second=True))
session.add(Words(word="Oak", first=True, second=True))
session.add(Words(word="City", first=True, second=True))
session.add(Words(word="Town", first=True, second=True))
session.add(Words(word="State", first=True, second=True))
session.add(Words(word="Panther", first=True, second=True))
session.add(Words(word="Tennis", first=True, second=True))
session.add(Words(word="Fest", first=True, second=True))
session.add(Words(word="Breakfast", first=True, second=True))
session.add(Words(word="Player", first=True, second=True))
session.add(Words(word="Hamlet", first=True, second=True))
session.add(Words(word="Made", first=True, second=True))
session.add(Words(word="River", first=True, second=True))
session.add(Words(word="Creek", first=True, second=True))
session.add(Words(word="Elk", first=True, second=True))
session.add(Words(word="Birch", first=True, second=True))
session.add(Words(word="Lane", first=True, second=True))
session.add(Words(word="Road", first=True, second=True))
session.add(Words(word="Street", first=True, second=True))
session.add(Words(word="Hill", first=True, second=True))
session.add(Words(word="Gold", first=True, second=True))
session.add(Words(word="Silver", first=True, second=True))
session.add(Words(word="Weekend", first=True, second=True))
session.add(Words(word="Monday", first=True, second=True))
session.add(Words(word="Sunday", first=True, second=True))
session.commit()

print("Finished adding words!")