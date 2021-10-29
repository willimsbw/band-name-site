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



#Adding words!
word1 = Words(word = "Fox")
session.add(word1)
session.commit()

word2 = Words(word = "Gorge")
session.add(word2)
session.commit()

word3 = Words(word = "Canyon")
session.add(word3)
session.commit()

word4 = Words(word = "Platypus")
session.add(word4)
session.commit()

word5 = Words(word = "Deer")
session.add(word5)
session.commit()

word6 = Words(word = "Mountain")
session.add(word6)
session.commit()

word7 = Words(word = "Lake")
session.add(word7)
session.commit()

word8 = Words(word = "Dog")
session.add(word8)
session.commit()

word9 = Words(word = "Man")
session.add(word9)
session.commit()

word10 = Words(word = "Sloth")
session.add(word10)
session.commit()

word = Words(word = "Llama")
session.add(word)
session.commit()

word = Words(word = "Archipelago")
session.add(word)
session.commit()

word = Words(word = "Cat")
session.add(word)
session.commit()

word = Words(word = "Pond")
session.add(word)
session.commit()

print("added words!")
