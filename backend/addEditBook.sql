CREATE DEFINER=`root`@`localhost` PROCEDURE `addEditBook`(
in _id int,
in _title varchar(45),
in _author varchar(45),
in _genre varchar(45),
in _publication_year int
)
BEGIN
	if _id = 0 then
		insert into bookStore(title,author,genre,publication_year)
        values (_title,_author,_genre,_publication_year);
	else
		update bookStore
        set
        title = _title,
        author = _author,
        genre = _genre,
        publication_year = _publication_year
        where id = _id;
	end if;
    
    select row_count() as "affectedRows";
        
END