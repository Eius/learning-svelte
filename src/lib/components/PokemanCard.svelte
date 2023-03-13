<script lang="ts">
    import type { LoadedPokemon } from "../../scripts/interfaces/PokemonInterface";

    export let pokeman: LoadedPokemon;
</script>

<div class="col-4">
    <div class="card d-flex align-items-center">
        <img src={pokeman.image} alt={pokeman.name + "-image"}>
        <h5 class="p-2">{pokeman.id}. {pokeman.name}</h5>
    </div>
</div>

<style lang="scss">
    @import "../styles/custom_variables";

    .card {
        background-color: $light;
        border: 1px solid $dark;
        border-radius: 3px;
    }

    h5 {
        text-transform: capitalize;
    }

    img {
        width: 45%;
        height: auto;
    }

</style>