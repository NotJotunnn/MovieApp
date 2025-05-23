import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #040014;

  gap: 15px;
`;

const BackgroundStyledImage = styled.Image.attrs({
  source: images.bg,
})`
  position: absolute;
  top: 0;

  width: 100%;

  z-index: 0;
`;

const StyledLogo = styled.Image.attrs({
  source: icons.logo,
})`
  width: 48px;
  height: 40px;

  margin-top: 80px;
  margin-bottom: 20px;
  margin-inline: auto;
`;

const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { minHeight: "100%", paddingBottom: 10 },
})`
  flex: 1;

  padding-inline: 20px;
`;

const StyledSearchBarView = styled.View`
  flex: 1;
  margin-top: 20px;
`;

const StyledActivityIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  color: "#0000ff",
})`
  margin-top: 40px;
  align-self: center;
`;

const StyledTextResult = styled.Text`
  font-size: 18px;

  color: white;
  font-weight: bold;

  margin-top: 20px;
  margin-bottom: 12px;
`;

const StyledTextMoviesResult = styled.Text`
  color: white;
  font-size: 14px;

  min-width: 50px;
`;

const StyledFlatList = styled.FlatList`
  margin-top: 8px;
  padding-bottom: 128px;
`;

interface MoviesResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Index() {
  const router = useRouter();

  const {
    data: movies = [],
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchPopularMovies({ query: "" }));

  return (
    <StyledView>
      <BackgroundStyledImage />

      <StyledScrollView>
        <StyledLogo />

        {moviesLoading ? (
          <StyledActivityIndicator />
        ) : moviesError ? (
          <StyledTextResult>Error: {moviesError?.message} </StyledTextResult>
        ) : movies && (
          <StyledSearchBarView>
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <>
              <StyledTextResult>Latest Movies</StyledTextResult>

              <StyledFlatList
                data={movies}
                // @ts-ignore
                renderItem={({ item }: { item: MoviesResults }) => (
                  <StyledTextMoviesResult>{item.title}</StyledTextMoviesResult>
                )}
                // @ts-ignore
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                scrollEnabled={false}
              />
            </>
          </StyledSearchBarView>
        )}
      </StyledScrollView>
    </StyledView>
  );
}
